import { getLongWords } from "./getLongWords.js";
describe("given get long words", () => {
  test("when language array is provided as an argument. Then expected array should be returned", () => {
    // Arrange
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expected_result = ["JavaScript", "TypeScript"];

    // Act
    const LongWords = getLongWords(LANGUAGES);

    // Assert
    expect(LongWords).toBeDefined();
    expect(LongWords).toEqual(expected_result);
  });

  test("when beatles array is provided as an argument. Then expected array should be returned", () => {
    // Arrange
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const expected_result = ["George", "Ringo"];

    // Act
    const LongWords = getLongWords(BEATLES);

    // Assert
    expect(LongWords).toBeDefined();
    expect(LongWords).toEqual(expected_result);
  });
});
