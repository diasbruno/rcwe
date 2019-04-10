ifeq ("$(WATCH)", "1")
WATCH=-w
endif

build-examples:
	./node_modules/.bin/webpack $(WATCH)

build:
	./node_modules/.bin/babel src/index.js --out-file lib/index.js
