import "./orderhistoryproduct.css";

export default function OrderHistoryProduct({ name, qty, cost }) {
  return (
    <div className="order-history-product--container">
      <img
        className="order-history-product--img"
        src={
          "/food/thumbnails/" + name.replaceAll(" ", "-").replaceAll("'", "").toLowerCase() + ".jpg"
        }
        alt={name}
      />
      <div className="order-history-product--name-qty">
        <p className="order-history-product--name">{name}</p>
        <p className="order-history-product--quantity">Price: {(cost / qty).toFixed(2)}$</p>
        <p className="order-history-product--quantity">Quantity: {qty}</p>
      </div>
      <div className="order-history-product--cost">
        <p>{cost.toFixed(2)}$</p>
      </div>
    </div>
  );
}
