const {functionBeingTested} = require('filepath')
    
describe('functionBeingTested', () => {
    test('what is being tested', (done) => {
        functionBeingTested(argument, (callbackResult) => {
            expect(callbackResult).toContain('expected content')
            expect(callbackResult.length).toBe(num)     // where num = expected length 
            done()
        })
    })
    test('check for false positive/behavious in case of error/...', (done) => {
        let callback = jest.fn()
        
    })
})