import addToCart from "../AddToCart";

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

beforeEach(() => {
  localStorage.setItem("cart", []);
});

it("adding new item to cart in LS", () => {
  const item = { name: "burger", price: 5, quantity: 1 };
  JSON.parse = jest.fn().mockImplementationOnce(() => []);
  addToCart(item);
  expect(localStorage.getItem("cart")).toBe('[{"name":"burger","price":5,"quantity":1}]');
});

it("adding different item to cart in LS", () => {
  localStorage.setItem("cart", '[{"name":"burger","price":5,"quantity":1}]');
  const item = { name: "burger2", price: 5, quantity: 1 };
  JSON.parse = jest.fn().mockImplementation(() => [{ name: "burger", price: 5, quantity: 1 }]);
  addToCart(item);
  expect(localStorage.getItem("cart")).toBe(
    '[{"name":"burger","price":5,"quantity":1},{"name":"burger2","price":5,"quantity":1}]'
  );
});

it("adding item with qty 0 to cart in LS", () => {
  const item = { name: "burger", price: 5, quantity: 0 };
  JSON.parse = jest.fn().mockImplementationOnce(() => []);
  addToCart(item);
  expect(localStorage.getItem("cart")).toBe("[]");
});
