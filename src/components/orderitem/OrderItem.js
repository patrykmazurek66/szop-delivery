import Div from "../div/Div";
import P from "../p/P";
import "./orderitem.css";

export default function OrderItem({ qty, name, price }) {
  return (
    <Div full nomp dark>
      <P>
        {qty} × {name}
      </P>
      <P>{(qty * price).toFixed(2)}$</P>
    </Div>
  );
}
