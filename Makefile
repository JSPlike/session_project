REPORTER = list
MOCHA_OPTS = --ui bdd -c


start:
	TWITTER_CONSUMER_KEY=cliKrmBEFIpFnCt5WOoCml9vo \
	TWITTER_CONSUMER_SECRET=oGARrl1jNsDzu4ckikAwu5Gfuzwxq0m1T9frqclFOdEob85hIB \
	node app


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

.PHONY: test db start


