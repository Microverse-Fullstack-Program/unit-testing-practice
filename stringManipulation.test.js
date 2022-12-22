const { stringLength, reverseString, capitalize } = require("./stringManipulation.js");

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

test("Should output reversed string", () => {
  //Act
  const output = reverseString("microverse");
  
  //Assert
  expect(output).toBe("esrevorcim");
});

describe ("capitalize the first character), () => {
  test("Should caplitalize the first char", () => {    
    //Act
   const output = capitalize("microverse")
    
    //Assert
    expect(output).toBe("Microverse");
  });

  test("Should not caplitalize first char", () => {    
    //Act
   const output = capitalize("Online")
    
    //Assert
    expect(output).toBe("Online");
  });
});
