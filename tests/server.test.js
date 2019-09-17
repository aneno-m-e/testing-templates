let request = require('supertest')
let server = require('server.js filepath')

test('Test that route is working', (done) => {
    request(server)     // Arrange
        .get('route')   // Act
        .expect(200)    // Assert
        .end(done)      // Indicates test needs to finish
})

test('Test page content', (done) => {
    request(server)
        .get('route')
        .end((error, res) => {
            expect(res.text).toContain('expected text content') // Content assertions need to be in end() to get hold of res
            done()
        })
})

// Grab content of page returned by server with res.text or res.body

test('Test post route', (done) => {
    request(server)
        .post('route')
        .send('data')   //data needs to be in the datatype/shape expected by the server
        .type('form')   // Fake a form request
        .end((err, res) => {
            expect(err).toBe(null)
            const actual = res.text // Content sent back by the server
            const expected = 'expected text'
            expect(actual).toBe(expected)
            done()
        })
})