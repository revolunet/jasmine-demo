## Jasmine

 * behavior-driven development framework for testing JavaScript code.
 * it does not depend on any other JavaScript frameworks.
 * it does not require a DOM
 * a runner, and a reporter
 * can be used standalone or integrated in 3rd party tools
 * great AngularJS integration ❤
 * spies, async, custom matchers

## Why testing

 * define your specs (BDD)
 * work with teams
 * prevent regressions ➤ easier refactoring
 * ✔ serene developer is productive

## Conventions

 * *.spec.js : allows code modular organisation : centralize your code, specs, styles and templates in folders. GruntJS will build the karma-config.js file

## Vocabulary

 * `describe` : a "test suite" to group tests together. (nestable)
 * `it` : defines a test
 * `expect` : define the test value and call a `matcher` to check the test validity
