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

### Testing Express server with Supertest

Check supertest is in package.json devDependencies. If not, install supertest npm package.

### Testing asynchronous functions

Don't test functions that use `prompt` or `console.log` with an automatic test, do it with a manual test.

### Testing Handlebars with Cheerio

Check cheerio is in package.json devDependencies. If not, install cheerio npm package.
Use `server.test.js` file

Test the most important feature with the most direct test possible (Front end don't want too many tests).


