import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given customersWhoBelongToMembership", () => {
  test("When COUNTRIES array is given, then expected result should be returned", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const result = ["Italy"];

    const shortCountries = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(shortCountries).toBeDefined();

    expect(shortCountries).toEqual(result);
  });
});
