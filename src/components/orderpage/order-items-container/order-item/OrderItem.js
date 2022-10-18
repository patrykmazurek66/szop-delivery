import "./orderitem.css";

export default function OrderItem({ qty, name, price }) {
  return (
    <div className="order-item">
      <p>
        {qty} × {name}
      </p>
      <p>{(qty * price).toFixed(2)}$</p>
    </div>
  );
}
