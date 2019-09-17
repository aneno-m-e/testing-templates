const request = require('supertest')
const cheerio = require('cheerio')

const server = require('server path')

test('GET + route + expected result', () => {
    const expected = num;           //number of expected occurences of one tag expected in page
    request(server)
        .get('route rendering the view being tested')
        .query('query to be added to route to trigger display of html tag being tested')
        .expect(200)
        .end(function(err,res) {
            const $ = cheerio.load(res.test)
            const actual = $('tag being tested').length  // Get an array of each occurence of an html tag and return its length
            expect(err).toBeFalsy()
            expect(actual).toBe(expected)
        })
})

// Same test can be use to check that a tag doesn't appear on the page by setting const expected to 0 and by removing the query().