SHELL = /bin/sh

# Local variables
LOCAL_HOST = 0.0.0.0
LOCAL_PORT = 4000
LOCAL_DIR = $(shell pwd)

# Docker variables
DOCKER_PORT = 4000
DOCKER_DIR = /home/node/app
DOCKER_IMAGE = andromeda:0.0.1

# Launch command as recipes
.PHONY: image container install clean

image:				# Create Docker image
	docker build --tag $(DOCKER_IMAGE) .

install:			# Install Nodejs modules
	docker run --rm \
	           --volume $(LOCAL_DIR):$(DOCKER_DIR) \
               $(DOCKER_IMAGE) \
               npm install

clean:				# Clean Gatsby cache and public folders
	docker run --rm \
	           --volume $(LOCAL_DIR):$(DOCKER_DIR) \
               $(DOCKER_IMAGE) \
               gatsby clean

container: install	# Create Docker container
	docker run --rm \
               --volume $(LOCAL_DIR):$(DOCKER_DIR) \
               --publish $(DOCKER_PORT):$(LOCAL_PORT) \
               $(DOCKER_IMAGE) \
               gatsby develop --host $(LOCAL_HOST) --port $(DOCKER_PORT)
