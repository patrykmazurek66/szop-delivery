import "./orderitem.css";

export default function OrderItem({ qty, name, price }) {
  return (
    <div className="order-item-container">
      <p className="order-item-container-left">
        {qty} × {name}
      </p>
      <p className="order-item-container-right">{(qty * price).toFixed(2)}$</p>
    </div>
  );
}
