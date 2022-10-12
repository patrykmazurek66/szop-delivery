import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Div from "../div/Div";
import P from "../p/P";
import "./orderpaymentcontainer.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function OrderPaymentContainer() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("to Send old:", data);
  }, [data]);

  return (
    <Div column outline>
      <P header>payment method</P>
      <form onSubmit={handleSubmit(data => setData(JSON.stringify(data)))} id="data-form">
        <FormControl>
          <RadioGroup row defaultValue="payu" name="radio-buttons-group">
            <Div column>
              <FormControlLabel
                {...register("paymentMethod")}
                labelPlacement="top"
                value="blik"
                control={<Radio />}
                label={<img src="/payment/blik.png" alt="blik" width="100px" height="100px" />}
              />
            </Div>
            <Div column>
              <FormControlLabel
                {...register("paymentMethod")}
                labelPlacement="top"
                value="payu"
                control={<Radio />}
                label={<img src="/payment/payu.png" alt="payu" width="100px" height="100px" />}
              />
            </Div>
            <Div column>
              <FormControlLabel
                {...register("paymentMethod")}
                labelPlacement="top"
                value="cash"
                control={<Radio />}
                label={<img src="/payment/cash.png" alt="cash" width="100px" height="100px" />}
              />
            </Div>
          </RadioGroup>
        </FormControl>
      </form>
    </Div>
  );
}
