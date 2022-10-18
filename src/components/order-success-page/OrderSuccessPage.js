import { FavoriteOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./ordersuccesspage.css";

export default function OrderSuccessPage() {
  return (
    <div className="order-success-page">
      <div className="order-success-page--hero">
        <div className="order-success-page--hero--info-container">
          <p>Ordered successfully!</p>
          <FavoriteOutlined fontSize="50px" />
          <Link to="/">
            <Button variant="contained">Back to Main Page</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
