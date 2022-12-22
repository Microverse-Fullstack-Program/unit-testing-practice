const { stringLength, reverseString, capitalizeFirstChar } = require("./stringManipulation.js");

describe ("string Length), () => {
  test("Should print the count of string character", () => {    
    //Act
    const output = stringLength("microverse");
    
    //Assert
    expect(output).toBe(6);
  });

  test("Check whether string length is between 1-10", () => {    
    //Act
     const output = () => stringLength('');
    
    //Assert
    expect(output).toThrow();
  });

  test("Check whether string length is between 1-10", () => {    
    //Act
     const output = () => stringLength('online school');
    
    //Assert
    expect(output).toThrow();
  });
});

