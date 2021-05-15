SHELL = /bin/sh

# Launch command as recipes
.PHONY: clean server

# Clean Gatsby cache and public folders
clean:
	gatsby clean

# Launch Gatsby development server
server: clean
	gatsby develop
