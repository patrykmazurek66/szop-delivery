import "./orderhistoryclient.css";

export default function OrderHistoryClient({
  name,
  city,
  address,
  company,
  payment,
  items,
  itemsCost,
  delivery,
}) {
  return (
    <div className="order-history-client--container">
      <div className="order-history-client--column-container">
        <p className="order-history-client--header">Shipping Address</p>
        <p className="order-history-client--text">{name}</p>
        <p className="order-history-client--text">{city}</p>
        <p className="order-history-client--text">{address}</p>
        <p className="order-history-client--text"></p>
      </div>
      <div className="order-history-client--column-container">
        <p className="order-history-client--header">Billing Info</p>
        <p className="order-history-client--text">{name}</p>
        {company && <p className="order-history-client--text">{company}</p>}
        <p className="order-history-client--text">{payment}</p>
      </div>
      <div className="order-history-client--column-container">
        <p className="order-history-client--header">Total</p>
        <p className="order-history-client--text">
          {items} items - {itemsCost.toFixed(2)}$
        </p>
        <p className="order-history-client--text">Delivery - {delivery}$</p>
        <p className="order-history-client--text">Total - {(itemsCost + 5).toFixed(2)}$</p>
      </div>
    </div>
  );
}
