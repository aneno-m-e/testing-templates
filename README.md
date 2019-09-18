# testing-templates

### Test driven development

Write test as you code to check your code

1. Red test
2. Green test
3. Refactor

### Testing with Jest - Setup

Jest = Testing Framework
1. Need a test folder
2. Name all test files with .test.js extension and place then in this folder

Check Jest is in package.json devDependencies. If not, install jest npm package.
Add script `"test": "jest --watchAll --noStackTrace"`
`--watchAll` reruns tests as files are modified
`--noStackTrace` ??

Test suite can be run with: 
`npm run test` to run all the suite
[add stuff about running part of the suite]

Check what code lines aren't covered by test with `jest --coverage` (but no need to cover 100% of the code)

### Testing with Jest - 'Vocabulary'

`test.skip` will skip that test 
`test.only` will only run that one test

**Grouping tests of a same function**
describe('function tested', () => {
    test('first thing being tested', (done) => {test function, ending with done()})
    test('second thing being tested', (done) => {test function, ending with done()})
})

**Assertions**
toEqual <=> ===
toBe <=> ==
not.toBe <=> !=
toHaveLength <=> `expect(actual.length).toBe(expected)`
toBeFalsy
toBeTruthy
toContain
toMatch <=> do a partial comparison of a string (ex: expect('grapefruits').toMatch('fruit'))

### Testing Express server with Supertest

Check supertest is in package.json devDependencies. If not, install supertest npm package.

### Testing asynchronous functions

Don't test functions that use `prompt` or `console.log` with an automatic test, do it with a manual test.

### Testing Handlebars with Cheerio

Check cheerio is in package.json devDependencies. If not, install cheerio npm package.
Use `server.test.js` file

Test the most important feature with the most direct test possible (Front end don't want too many tests).

### Testing knex databases

Two approaches are possible:
    1. Using mock (not detailed here)
    2. Use test seeds (`dbName.js`) to control what the functions under test will return

Start by setting up `test-environment.js`.
Create a seeds folder in the tests folder and create test seeds.

You can choose to test the server and db in the same test file (integrative testing). The test would call the routes calling the db functions.
-> cf https://github.com/roa-2019/client-side-rendering/blob/solution/server/tests/server.test.js
https://github.com/roa-2019/client-side-rendering/blob/testing-client-api/server/tests/server.test.js
https://github.com/roa-2019/client-side-rendering/blob/test-google-api/server/tests/server.test.js

### Testing APIs
https://github.com/roa-2019/client-side-rendering/blob/testing-client-api/client/api.test.js

### Testing React with enzyme
https://github.com/roa-2019/memory/tree/solution/tests
https://github.com/roa-2019/enspiraled/tree/solution/tests
https://github.com/roa-2019/taxonomic-routing/tree/solution/tests

https://github.com/roa-2019/boilerplate-fullstack/blob/master/tests/client/App.test.js

### Testing Redux
https://github.com/roa-2019/testing-redux-example
https://github.com/roa-2019/sweet-as-beers/tree/solution/test

### Testing Auth?
https://github.com/roa-2019/jwt-auth/tree/solution/tests