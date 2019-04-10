ifeq ("$(WATCH)", "1")
WATCH=-w
endif

build:
	./node_modules/.bin/webpack $(WATCH)
