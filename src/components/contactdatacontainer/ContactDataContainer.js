import "./contactdatacontainer.css";

import { TextField } from "@mui/material";
import P from "../p/P";
import Div from "../div/Div";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import { axiosPostOrder } from "../communicate/Comm";
import { useNavigate } from "react-router-dom";
export default function ContactDataContainer() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <Div column outline>
      <P header>Contact Data</P>
      <form
        onSubmit={handleSubmit(data => {
          axiosPostOrder(data);
          navigate("/");
        })}
        id="data-form"
      >
        <Div row>
          <Div column nomp>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              required
              type="text"
              size="small"
              fullWidth
              {...register("name")}
            />
            <TextField
              id="company"
              label="Company"
              variant="outlined"
              type="text"
              size="small"
              {...register("company")}
            />
            <TextField
              id="address-1"
              label="Address 1"
              variant="outlined"
              required
              type="text"
              size="small"
              {...register("address1")}
            />
            <TextField
              id="postal-code"
              label="Postal Code"
              variant="outlined"
              required
              type="text"
              size="small"
              {...register("postalCode")}
            />
          </Div>
          <Div column nomp>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              required
              type="text"
              size="small"
              {...register("email")}
            />
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              required
              type="number"
              size="small"
              {...register("phone")}
            />
            <TextField
              id="address-2"
              label="Address 2"
              variant="outlined"
              type="text"
              size="small"
              {...register("address2")}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              required
              type="text"
              size="small"
              {...register("city")}
            />
          </Div>
        </Div>
        <FormControl>
          <RadioGroup row defaultValue="payU" name="radio-buttons-group" required>
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
                value="payU"
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
