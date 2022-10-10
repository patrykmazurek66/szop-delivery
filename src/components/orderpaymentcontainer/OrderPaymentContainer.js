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
            <FormControlLabel
              labelPlacement="top"
              value="blik"
              control={<Radio />}
              label={<img src="/blank.png" alt="blik" />}
              chi
            />
          </Div>
          <Div column>
            <FormControlLabel
              labelPlacement="top"
              value="payu"
              control={<Radio />}
              label={<img src="/blank.png" alt="payu" />}
            />
          </Div>
          <Div column>
            <FormControlLabel
              labelPlacement="top"
              value="cash"
              control={<Radio />}
              label={<img src="/blank.png" alt="cash" />}
            />
          </Div>
        </RadioGroup>
      </FormControl>
    </Div>
  );
}
