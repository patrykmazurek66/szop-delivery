import "./productmodal.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { useState, useEffect } from "react";

export default function ProductModal({ name, imgPath, description, rating, price, nutrition }) {
  const [ratingStars, setRatingStars] = useState([]);

  useEffect(() => {
    let tempRating = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      tempRating.push(<StarIcon fontSize="inherit" />);
    }

    Math.floor(rating) < rating ? tempRating.push(<StarHalfIcon fontSize="inherit" />) : {};

    for (let i = Math.ceil(rating); i < 5; i++) {
      tempRating.push(<StarBorderIcon fontSize="inherit" sx={{ color: "var(--main600)" }} />);
    }
    console.log(tempRating, rating);
    setRatingStars(tempRating);
  }, []);

  return (
    <div className="product-modal-container">
      <img src={imgPath} alt={name} className="product-modal-container--product-image" />
      <div className="product-modal-container--right-col">
        <h2 className="product-modal-container--item-name">{name}</h2>
        <div className="product-modal-container--rating">
          {ratingStars}
          <p>({rating})</p>
        </div>
        <p className="product-modal-container--price">${price.toFixed(2)}</p>
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
