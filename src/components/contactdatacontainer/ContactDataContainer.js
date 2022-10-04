import "./contactdatacontainer.css";

import { TextField } from "@mui/material";
import P from "../p/P";
import Div from "../div/Div";

export default function ContactDataContainer() {
  return (
    <Div column outline>
      <P header>Contact Data</P>
      <Div row>
        <Div column nomp>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            required
            type="text"
            size="small"
            fullWidth
          />
          <TextField id="company" label="Company" variant="outlined" type="text" size="small" />
          <TextField
            id="address-1"
            label="Address 1"
            variant="outlined"
            required
            type="text"
            size="small"
          />
          <TextField
            id="postal-code"
            label="Postal Code"
            variant="outlined"
            required
            type="text"
            size="small"
          />
        </Div>
        <Div column nomp>
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            required
            type="text"
            size="small"
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            required
            type="number"
            size="small"
          />
          <TextField id="address-2" label="Address 2" variant="outlined" type="text" size="small" />
          <TextField id="city" label="City" variant="outlined" required type="text" size="small" />
        </Div>
      </Div>
    </Div>
  );
}
