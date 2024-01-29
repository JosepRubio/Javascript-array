/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "US": {id: 1, enabled: false},
 *  "EN": {id: 2, enabled: false},
 *  "EN": {id: 3, enabled: false},
 *  "EN": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

export const createLocalesSettings = (LOCALES) => {
  return LOCALES.reduce((settings, locale, index) => {
    settings[locale] = { id: index, enabled: index === 0 };

    return settings;
  }, {});
};
