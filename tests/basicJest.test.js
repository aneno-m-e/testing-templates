//link file(s) under test
const varName = require('filepath')
//then call functions with varName.functionName() in tests
//or link
const varName = require('filepath').functionName

//or with ES6
import { functionName } from 'filepath'

//If need be, this is where global variables used by several tests can be defined
//or imported from data files


//basic test function layout
test('test description', function() {
    //Arrange = set up variables and expected outcomes
    //Act = run the code from tested file
    //Assert = check expected against received
})
//can also be written with ES6 synthax
test('test description', () => {
    //test
})

//Setup a test to check that the test file is setup properly.
test('Is test working?', function() {
    // Examples:
    expect(true).toBeTruthy()
    
    const result = ['dave', 'sharon']                   //Arrange
    result.push('flora')                                //Act
    expect(result).toEqual(['dave', 'sharon', 'flora']) //Assert
})

//Test file under test
test('describe what is being tested', function() {
    //for a simple function returning something
    expect(functionName()).toBe('whatever that function is supposed to return')
    //with argument
    expect(functionName(argument)).toBe('whatever this function is supposed to return when passed that argument')
    // AAA
    var argument = 'argument'           // Arrange - set to expected datatypes
    var expected = 'Expected result'    
    var actual = functionName(argument) //Act
    expect(actual).toBe(expected)       //Assert
})