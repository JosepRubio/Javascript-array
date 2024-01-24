import { capitalizeMates } from "./capitalizeMates.js";

describe("Given capitalizeMates", () => {
  test("When array Mates is provided as an argument, Then expected array should be returned", () => {
    const Mates = ["John", "Jacob", "Jingleheimer", "Schmidt"];
    const Result = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const Maths = capitalizeMates(Mates);

    expected(Maths).toBeDefined();
    expected(Maths).toEqual(Result);
  });
});
