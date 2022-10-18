import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function SetRating(rating) {
  const tempRating = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    tempRating.push(<StarIcon fontSize="inherit" key={i} />);
  }

  Math.floor(rating) < rating
    ? tempRating.push(<StarHalfIcon fontSize="inherit" key={Math.floor(rating)} />)
    : {};

  for (let i = Math.ceil(rating); i < 5; i++) {
    tempRating.push(<StarBorderIcon fontSize="inherit" sx={{ color: "var(--main600)" }} key={i} />);
  }
  return tempRating;
}
