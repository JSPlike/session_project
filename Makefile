REPORTER = list
MOCHA_OPTS = --ui bdd -c

db:
	echo Seeding blog-test *****************************************************
	./seed.sh
	
test:
	clear
	echo Starting test **********
	mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	test-example/*.js
	echo Ending test

test-w:
	mocha \
	--reporter $(REPORTER) \
	--growl \
	--watch \
	$(MOCHA_OPTS) \
	tests/*.js

test-module-a:
	mocha tests/module-a.js --ui tdd --reporter list --ignore-leaks

test-module-b:
	clear
	echo Starting test **********
	mocha \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS) \
	test-example/module-b.js
	echo Ending test

.PHONY: test test-w test-module-a test-module-b


