import "./productmodal.css";

import { useState, useEffect } from "react";
import SetRating from "./SetRating";

export default function ProductModal({ name, imgPath, description, rating, price, nutrition }) {
  const [ratingStars, setRatingStars] = useState([]);

  useEffect(() => {
    setRatingStars(SetRating(rating));
  }, []);

  return (
    <div className="product-modal-container">
      <img
        src={"/food/" + imgPath}
        alt={name}
        className="product-modal-container--product-image"
        loading="lazy"
      />
      <div className="product-modal-container--right-col">
        <h2 className="product-modal-container--item-name">{name}</h2>
        <div className="product-modal-container--rating">
          {ratingStars}
          <p>({rating})</p>
        </div>
        <p className="product-modal-container--price">${(price * 1).toFixed(2)}</p>
        <p className="product-modal-container--description">{description}</p>
        <div className="product-modal-container--nutrition-container">
          <h3>nutrition</h3>
          <div className="product-modal-container--nutrition-container--item">
            <p>Calories:</p>
            <p>{nutrition.calories}</p>
          </div>
          <div className="product-modal-container--nutrition-container--item">
            <p>Fat: </p>
            <p>{nutrition.fat}</p>
          </div>
          <div className="product-modal-container--nutrition-container--item">
            <p>Proteins: </p>
            <p>{nutrition.proteins}</p>
          </div>
          <div className="product-modal-container--nutrition-container--item">
            <p>Carbohydrates: </p>
            <p>{nutrition.carbohydrates}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
