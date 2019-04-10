ifeq ("$(WATCH)", "1")
WATCH=-w
endif

build-examples:
	./node_modules/.bin/webpack $(WATCH)

build:
	./node_modules/.bin/babel index.js --out-file lib/index.js
