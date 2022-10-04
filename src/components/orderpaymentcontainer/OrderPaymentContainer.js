import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Div from "../div/Div";
import P from "../p/P";
import "./orderpaymentcontainer.css";

export default function OrderPaymentContainer() {
  return (
    <Div column outline>
      <P header>payment method</P>
      <FormControl>
        <RadioGroup row defaultValue="payu" name="radio-buttons-group">
          <Div column>
            <img src="blank.png" alt="blik" />
            <FormControlLabel
              labelPlacement="bottom"
              value="blik"
              control={<Radio />}
              label="BLIK"
            />
          </Div>
          <Div column>
            <img src="blank.png" alt="payu" />

            <FormControlLabel
              labelPlacement="bottom"
              value="payu"
              control={<Radio />}
              label="PayU"
            />
          </Div>
          <Div column>
            <img src="blank.png" alt="cash" />

            <FormControlLabel
              labelPlacement="bottom"
              value="cash"
              control={<Radio />}
              label="Cash"
            />
          </Div>
        </RadioGroup>
      </FormControl>
    </Div>
  );
}
