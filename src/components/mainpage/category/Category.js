import { ToggleButton } from "@mui/material";

export default function Category({ name }) {
  return (
    <ToggleButton
      value={name}
      // onChange={() => {
      //   let categories = [];
      //   categories = JSON.parse(
      //     localStorage.activeCategories ? localStorage.activeCategories : "[]"
      //   );
      //   if (categories.includes(name)) {
      //     categories = categories.filter(cat => {
      //       return cat !== name;
      //     });
      //   } else {
      //     categories.push(name);
      //   }
      //   localStorage.setItem("activeCategories", JSON.stringify(categories));
      // }}
    >
      {name}
    </ToggleButton>
  );
}
