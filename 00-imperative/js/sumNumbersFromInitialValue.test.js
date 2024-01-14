import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue.js";
describe("given sumNumbersFromInitialValue", () => {
  test("when NUMBERS array is provided as an argument. Then expected array should be returned", () => {
    // Arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const expected_result = 15;
    const initialValue = 0;
    // Act
    const sumNumbers = sumNumbers(NUMBERS, initialValue);

    // Assert
    expect(sumNumbers).toBeDefined();
    expect(sumNumbers).toBe(expected_result);
  });

  test("when NUMBERS array is provided as an argument. Then expected array should be returned", () => {
    // Arrange
    const NUMBERS = [1, 2, 3, 4, 5];
    const expected_result = 25;
    const initialValue = 10;
    // Act
    const sumNumbers = sumNumbers(NUMBERS, initialValue);

    // Assert
    expect(sumNumbers).toBeDefined();
    expect(sumNumbers).toBe(expected_result);
  });
});
