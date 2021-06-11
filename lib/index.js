/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 */
export const LocalStorageState = (key, defaultValue) => {
  defaultValue &&
    window.localStorage.setItem(key, JSON.stringify(defaultValue));

  let valueInLocalStorage = window.localStorage.getItem(key);
  if (valueInLocalStorage) {
    return JSON.parse(valueInLocalStorage);
  } else {
    valueInLocalStorage = { lat: 0, lng: 0 };
  }

  return valueInLocalStorage;
};
