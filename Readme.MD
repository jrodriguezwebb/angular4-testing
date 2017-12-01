Si hay problemas para generar coverage

1 - npm install --save-dev karma-teamcity-reporter
2 - Add require('karma-teamcity-reporter') to list of plugins in karma.conf.js
3 - ng test --single-run --code-coverage --reporters teamcity - the tests run with TeamCity reporting as    expected.
4 - ls coverage - the coverage folder is missing.
5 - Try again with a different reporter: ng test --single-run --code-coverage --reporters progress - same result, tests pass but there is no coverage report.
6 - Try again with no reporter: ng test --single-run --code-coverage - works as expected and generates a coverage report.