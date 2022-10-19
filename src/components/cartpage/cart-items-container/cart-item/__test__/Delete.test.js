import deleteFromCart from "../DeleteFromCart";

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
  localStorage.setItem("cart", [{ name: "burger", price: 5, quantity: 1 }]);
});

it("Deleting item from LS", () => {
  const cart = [{ name: "burger", price: 5, quantity: 1 }];
  JSON.parse = jest.fn().mockImplementationOnce(() => cart);
  deleteFromCart(cart[0].name);
  expect(localStorage.getItem("cart")).toBe("[]");
});
