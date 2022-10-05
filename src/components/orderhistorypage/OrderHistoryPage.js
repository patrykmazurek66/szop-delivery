import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Footer from "../footer/Footer";
import { useState } from "react";

export default function OrderHisoryPage() {
  const [formats, setFormats] = useState(["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ToggleButtonGroup value={formats} onChange={handleFormat}>
        <ToggleButton value="1">1</ToggleButton>
        <ToggleButton value="2">2</ToggleButton>
        <ToggleButton value="3">3</ToggleButton>
        <ToggleButton value="4" disabled>
          4
        </ToggleButton>
      </ToggleButtonGroup>
      <Footer />
    </>
  );
}
