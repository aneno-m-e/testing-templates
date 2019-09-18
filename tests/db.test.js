const testEnv = require('./test-environment')
const db = require('path to db.js file')

let testDb = null

// Set test database before each test
beforeEach(() => {
    testDb = testEnv.getTestDb()
    return testEnv.initialise(testDb)
  })
  
// Reset test database after each test
afterEach(() => testEnv.cleanup(testDb))

test('Vanilla test = check if test file is setup properly', () => {
    expect(1).toBe(1)
})
    
test('get data', () => {
    const expected = expectedValue
    return db.functionGettingData(testDb)        // function from db file. If looking for a specific piece of data functionGettingData(searchTerms, testDb)
        .then((result) => {
            const actual = result.length         // Example checking array length
            expect(actual).toBe(expected)
            done()
        })
})

test('add data', () => {
    return db.functionAddingData('new data', testDb)
        .then(newIds => {
            expect(newIds[0].toBe(expectedId))
        })
})

test('update data', () => {
    const id = 2 // or any existing id
    return db.functionUpdatingData(id, testDb)
        .then(() => {
            return testDb('dbName')
                .where('id', id)
                .first()
        })
        .then(result => {
            expect(result.updatedField).toBe(expected)
        })
})

test('delete data', () => {
    return db.functionDeletingData(idToDelete, testDb)
        .then(() => testDb('dbName').select())
        .then(result => {
            expect(result.length).toBe(expectedLength)
        })
})