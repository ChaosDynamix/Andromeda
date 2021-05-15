SHELL = /bin/sh

# Launch command as recipes
.PHONY: clean install server

# Clean Gatsby cache and public folders
clean:
	gatsby clean

# Install NodeJS modules
install:
	npm install

# Launch Gatsby development server
server: clean install
	gatsby develop
