//link file under test
var varName = require('filepath')
//then call functions with varName.functionName()
//or
import { functionName } from 'filepath'

//basic test function layout
test('test description', function() {
    //Arrange = set up variables and expected outcomes
    //Act = run the code from tested file
    //Assert = check expected against received
})

//Setup a test to check that the test file is setup properly.
test('Is test working?', function() {
    // Examples:
    expect(2 + 2 === 4).toBeTruthy()
    expect(3 * 3).toBe(9)

    const result = ['dave', 'sharon']                   //Arrange
    result.push('flora')                                //Act
    expect(result).toEqual(['dave', 'sharon', 'flora']) //Assert
})

//Test file under test
test('Test function from linked file', function() {
    //for a simple function returning something
    expect(functionName()).toBe('whatever that function is supposed to return')
    //with argument
    expect(functionName(argument)).toBe('whatever this function is supposed to return when passed that argument')
    // AAA
    var expected = 'Expected result'    // Arrange - set to expected datatype
    var actual = functionName(argument) //Act
    expect(actual).toBe(expected)       //Assert
})