import calculator from './calculator.js';

//Arrange
const calculator = new Calculator();

describe("Test add fucntion", () => {
  test("Should retrun +ve sum result", () => {
    expect(calculator.add(15, 50)).toBe(65);
  });

  test("Should retrun -ve sum result", () => {
    expect(calculator.add(-5, -6)).toBe(-11);
  });
 
  test("Should retrun -ve sum result", () => {
    expect(calculator.add(15, -40)).not.toBe(25);
  });

  test("Should retrun +ve sum result", () => {
    expect(calculator.add(-15, 40)).toBe(25);
  });
});

describe("Test subtract function", () => {
  test("Should retrun zero", () => {
    expect(calculator.subtract(5, 5)).toBe(0);
  });

  test("Should retrun -ve subtraction result", () => {
    expect(calculator.subtract(5, -20)).not.toBe(10);
  });

  test("Should retrun +ve subtraction result", () => {
    expect(calculator.subtract(5, 20)).toBe(-15);
  });
 
  test("Should retrun +ve subtraction result", () => {
    expect(calculator.subtract(-5, 20)).not.toBe(-15);
  });
});

describe("Test divide fucntion", () => {
  test("Should retrun 1", () => {
    expect(calculator.divide(5, 5)).toBe(1);
  });

  test("Should retrun -ve quotient result", () => {
    expect(calculator.divide(100, -10)).not.toBe(10);
  });

  test("Should retrun +ve quotient result", () => {
    expect(calculator.divide(27, 3)).toBe(9);
  });
  
  test("Should retrun +ve quotient result", () => {
    expect(calculator.divide(-27, -3)).not.toBe(-9);
  });
});

describe("Test multiply function", () => {
  test("Should retrun +ve multiplication result", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test("Should retrun -ve multiplication result", () => {
    expect(calculator.multiply(5, -20)).not.toBe(10);
  });

  test("Should retrun +ve multiplication result", () => {
    expect(calculator.multiply(-27, -3)).toBe(81);
  });
});
