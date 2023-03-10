const Calculator = require( './calculator');

//Arrange
const calculator = new Calculator();

describe("Test add fucntion", () => {
  test("Should retrun +ve sum result", () => {
    //Assert
    expect(calculator.add(15, 50)).toBe(65);
  });

  test("Should retrun -ve sum result", () => {
    //Assert
    expect(calculator.add(-5, -6)).toBe(-11);
  });
 
  test("Should retrun -ve sum result", () => {
    //Assert
    expect(calculator.add(15, -40)).not.toBe(25);
  });

  test("Should retrun +ve sum result", () => {
    //Assert
    expect(calculator.add(-15, 40)).toBe(25);
  });
});

describe("Test subtract function", () => {
  test("Should retrun zero", () => {
    //Assert
    expect(calculator.subtract(5, 5)).toBe(0);
  });

  test("Should retrun -ve subtraction result", () => {
    //Assert
    expect(calculator.subtract(5, -20)).not.toBe(10);
  });

  test("Should retrun +ve subtraction result", () => {
    //Assert
    expect(calculator.subtract(5, 20)).toBe(-15);
  });
 
  test("Should retrun +ve subtraction result", () => {
    //Assert
    expect(calculator.subtract(-5, 20)).not.toBe(-15);
  });
});

describe("Test divide fucntion", () => {
  test("Should retrun 1", () => {
    //Assert
    expect(calculator.divide(5, 5)).toBe(1);
  });

  test("Should retrun -ve quotient result", () => {
    //Assert
    expect(calculator.divide(100, -10)).not.toBe(10);
  });

  test("Should retrun +ve quotient result", () => {
    //Assert
    expect(calculator.divide(27, 3)).toBe(9);
  });
  
  test("Should retrun +ve quotient result", () => {
    //Assert
    expect(calculator.divide(-27, -3)).not.toBe(-9);
  });
});

describe("Test multiply function", () => {
  test("Should retrun +ve multiplication result", () => {
    //Assert
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test("Should retrun -ve multiplication result", () => {
    //Assert
    expect(calculator.multiply(5, -20)).not.toBe(10);
  });

  test("Should retrun +ve multiplication result", () => {
    //Assert
    expect(calculator.multiply(-27, -3)).toBe(81);
  });
});
