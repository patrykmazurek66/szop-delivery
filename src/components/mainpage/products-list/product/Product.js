import "./product.css";
import { Slide, Snackbar, Button, Modal } from "@mui/material";
import { useState } from "react";
import ProductModal from "../../product-modal/ProductModal";
import addToCart from "./AddToCart";

export default function Product({ name, imagePath, description, price, rating, nutrition }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    addToCart({ name, price, quantity: 1 });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className="product-container">
      <Button onClick={handleOpenModal} sx={{ padding: 0, border: "none" }}>
        <img src={"/food/thumbnails/" + imagePath} alt={name} className="product--img" />
      </Button>

      <div className="product--right-col">
        <div className="product--name-desc">
          <Button variant="text" onClick={handleOpenModal} className="product--name-btn">
            <p className="product-name">{name}</p>
          </Button>
          <p className="product-desc">{description}</p>
        </div>
        <div className="product--price-btn">
          <p className="product-price">{price}$</p>
          <Button variant="contained" onClick={handleClick}>
            ADD +
          </Button>
        </div>
      </div>
      <Snackbar
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        TransitionComponent={function TransitionLeft(props) {
          return <Slide {...props} direction="right" />;
        }}
        message={name + " has been added to your cart!"}
        key={name}
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ProductModal
            name={name}
            imgPath={imagePath}
            description={description}
            price={price}
            rating={rating}
            nutrition={nutrition}
          />
        </div>
      </Modal>
    </div>
  );
}
