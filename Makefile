SHELL := /bin/bash

PWD := $(shell pwd)

npm:
	@echo "Install node packages"
	npm install

bower:
	@echo "Install bower packages"
	bower install

babel:
	@echo "Transpile javascript"
	$(PWD)/node_modules/babel/bin/babel.js client/src --out-dir client/js --modules system

babel-watch:
	@echo "Transpile javascript & watch for changes"
	$(PWD)/node_modules/babel/bin/babel.js client/src --out-dir client/js --modules system  --watch

setup: npm bower babel

clean:
	@echo "Cleanup installed files"
	@cd dist && ls | grep -v .gitkeep | xargs rm -rf
