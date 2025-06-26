.PHONY: build server dependencies clean

build: dependencies
	yarn build

server: dependencies
	yarn start

dependencies:
	yarn install

clean:
	rm -rf build

format:
	./node_modules/.bin/prettier --write .
