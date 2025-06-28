// const addNumbersTwo = require('./addNumbers');
// const addNumbers = require('./addNumbers')

const { addNumbers, addNumbersTwo } = require('./addNumbers');

describe('1. adding random words, addNumbers', function() {
  test('adding something to this line to see what happens, adds the numbers together', function() {
    expect(addNumbers()).toEqual(2);
  });
});

describe("My own test suite", function() {
  test("my own test", function(){
    expect(addNumbersTwo()).toEqual(4);
  });
});