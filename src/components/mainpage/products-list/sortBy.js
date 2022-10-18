export default function SortBy(arr, sortType) {
  let newArr = arr;
  switch (sortType) {
    case "price-asc":
      newArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "price-dsc":
      newArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    case "name-asc":
      newArr.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
      break;
    case "name-dsc":
      newArr.sort((a, b) => (b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1));
      break;
    default:
      newArr.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
      break;
  }
  return newArr;
}
