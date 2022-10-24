import "./contactdatacontainer.css";

import { Button, TextField } from "@mui/material";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import { axiosPostOrder } from "../../communicate/Comm";
import { useNavigate } from "react-router-dom";

export default function ContactDataContainer() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
    <div className="contact-data-container">
      <p className="contact-data-container--header">Contact Data</p>
      <div>
        <form
          className="contact-data-container--form"
          id="data-form"
          data-testid="form"
          onSubmit={handleSubmit(data => {
            console.log("success");
            axiosPostOrder(data);
            navigate("/order-success");
          })}
        >
          <div className="contact-data-container--form--client-data">
            <div className="contact-data-container--left-col">
              <TextField
                id="name"
                label="Full Name"
                variant="standard"
                size="small"
                {...register("name", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                  pattern: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
                })}
              />
              <TextField
                id="company"
                label="Company Name"
                variant="standard"
                size="small"
                {...register("company", {
                  required: false,
                  maxLength: 30,
                  pattern: /[a-zA-Z][a-zA-Z0-9-_]/,
                })}
              />
              <TextField
                id="address1"
                label="Address"
                variant="standard"
                size="small"
                {...register("address1", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                })}
              />
              <TextField
                id="postalCode"
                label="Postal Code"
                variant="standard"
                size="small"
                {...register("postalCode", {
                  required: true,
                  maxLength: 6,
                  minLength: 6,
                  pattern: /[0-9]{2}-[0-9]{3}/,
                })}
              />
            </div>
            <div className="contact-data-container--right-col">
              {" "}
              <TextField
                id="email"
                label="Email address"
                variant="standard"
                size="small"
                {...register("email", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                  pattern:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                })}
              />
              <TextField
                id="phone"
                label="Phone"
                variant="standard"
                size="small"
                {...register("phone", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                  pattern: /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm,
                })}
              />
              <TextField
                id="address2"
                label="Address Next Line"
                variant="standard"
                size="small"
                {...register("address2", {
                  required: false,
                  maxLength: 30,
                  minLength: 1,
                })}
              />
              <TextField
                id="city"
                label="City"
                variant="standard"
                size="small"
                {...register("city", {
                  required: true,
                  maxLength: 30,
                  minLength: 3,
                  pattern: /[a-zA-Z]/,
                })}
              />
            </div>
          </div>
          <FormControl>
            <RadioGroup row defaultValue="payu" name="radio-buttons-group">
              <div>
                <FormControlLabel
                  {...register("paymentMethod")}
                  labelPlacement="top"
                  value="blik"
                  control={<Radio />}
                  label={<img src="/payment/blik.png" alt="blik" width="100px" height="100px" />}
                />
              </div>
              <div>
                <FormControlLabel
                  {...register("paymentMethod")}
                  labelPlacement="top"
                  value="payu"
                  control={<Radio />}
                  label={<img src="/payment/payu.png" alt="payu" width="100px" height="100px" />}
                />
              </div>
              <div>
                <FormControlLabel
                  {...register("paymentMethod")}
                  labelPlacement="top"
                  value="cash"
                  control={<Radio />}
                  label={<img src="/payment/cash.png" alt="cash" width="100px" height="100px" />}
                />
              </div>
            </RadioGroup>
          </FormControl>
          <Button variant="contained" type="submit" form="data-form" fullWidth>
            Order
          </Button>
        </form>
      </div>
    </div>
  );
}
