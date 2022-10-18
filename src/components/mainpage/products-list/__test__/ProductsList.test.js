import SortBy from "../sortBy";

it("sort array by name asc", () => {
  const arr = [
    {
      price: 1,
      name: "c",
    },
    {
      price: 2,
      name: "a",
    },
    {
      price: 3,
      name: "b",
    },
  ];
  expect(JSON.stringify(SortBy(arr, "name-asc"))).toBe(
    JSON.stringify([
      {
        price: 2,
        name: "a",
      },

      {
        price: 3,
        name: "b",
      },
      {
        price: 1,
        name: "c",
      },
    ])
  );
});

it("sort array by name dsc", () => {
  const arr = [
    {
      price: 1,
      name: "c",
    },
    {
      price: 2,
      name: "a",
    },
    {
      price: 3,
      name: "b",
    },
  ];
  expect(JSON.stringify(SortBy(arr, "name-dsc"))).toBe(
    JSON.stringify([
      {
        price: 1,
        name: "c",
      },

      {
        price: 3,
        name: "b",
      },
      {
        price: 2,
        name: "a",
      },
    ])
  );
});

it("sort array by price asc", () => {
  const arr = [
    {
      price: 1,
      name: "c",
    },
    {
      price: 2,
      name: "a",
    },
    {
      price: 3,
      name: "b",
    },
  ];
  expect(JSON.stringify(SortBy(arr, "price-asc"))).toBe(
    JSON.stringify([
      {
        price: 1,
        name: "c",
      },
      {
        price: 2,
        name: "a",
      },

      {
        price: 3,
        name: "b",
      },
    ])
  );
});

it("sort array by price dsc", () => {
  const arr = [
    {
      price: 1,
      name: "c",
    },
    {
      price: 2,
      name: "a",
    },
    {
      price: 3,
      name: "b",
    },
  ];
  expect(JSON.stringify(SortBy(arr, "price-dsc"))).toBe(
    JSON.stringify([
      {
        price: 3,
        name: "b",
      },
      {
        price: 2,
        name: "a",
      },
      {
        price: 1,
        name: "c",
      },
    ])
  );
});
