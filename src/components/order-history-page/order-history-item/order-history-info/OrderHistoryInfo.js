import "./orderhistoryinfo.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function OrderHistoryInfo({ id, itemsCount, price, moreDetails }) {
  const date = new Date(id * 1);

  console.log(
    id,
    date.toLocaleDateString("en-US"),
    date.toLocaleTimeString("pl-PL"),
    itemsCount,
    price
  );
  return (
    <div className="order-history-info-container">
      <p className="order-history-info--id">Order ID: {id}</p>
      <p className="order-history-info--date">
        Date: {date.toLocaleDateString("en-US")} {date.toLocaleTimeString("pl-PL").slice(0, -3)}
      </p>
      <p className="order-history-info--total">
        {itemsCount} items - {price.toFixed(2)}$
      </p>
      {moreDetails === false ? (
        <ExpandMoreIcon className="order-history-info--more-icon" fontSize="large" />
      ) : (
        <ExpandLessIcon className="order-history-info--more-icon" fontSize="large" />
      )}
    </div>
  );
}
