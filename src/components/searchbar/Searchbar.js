import "./searchbar.css";

import TextInput from "../text_input/TextInput";
import Button from "../button/Button";

export default function Searchbar() {
  return (
    <div className="searchbar-container">
      <Button sort>SORT</Button>
      <TextInput />
    </div>
  );
}
