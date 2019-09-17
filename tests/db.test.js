let db = require('path to db.js file')

describe ('db', () => {
    test('Vanilla test = check if test file is setup properly', () => {
        expect(1).toBe(1)
    })
    test('get data', (done) => {
        db.functionGettingData()        // function from db file
            .then((result) => {
                expect(result.length).toBe(num)  // num = expected length
                done()
            })
    })
})