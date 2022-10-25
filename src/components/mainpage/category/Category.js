import { ToggleButton } from "@mui/material";

export default function Category({ name }) {
  return <ToggleButton value={name}>{name}</ToggleButton>;
}
