# testing-templates

### Test driven development

Write test as you code to check your code

1. Red test
2. Green test
3. Refactor

### Test with Jest - Setup

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

Check what code lines aren't covered by test with `jest --coverage`

### Test with Jest - 'Vocabulary'

**Setup**
`test.skip` will skip that test 
it?
describe

**Assertions**
toEqual <=> ===
toBe <=> ==
not.toBe <=> !=
toHaveLength <=> `expect(actual.length).toBe(expected)`
toBeFalsy
toBeTruthy
toContain

### Test Express server with Supertest

Check supertest is in package.json *dependencies*. If not, install supertest npm package.



