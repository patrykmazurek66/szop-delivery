import { localStorageSet } from "../Comm";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

afterEach(() => {
  window.localStorage.clear();
});

it("data is added into local storage", () => {
  const mockId = "1";
  const mockJson = { data: "json data" };
  localStorageSet(mockId, mockJson);
  expect(localStorage.getItem(mockId)).toBe(mockJson);
});
