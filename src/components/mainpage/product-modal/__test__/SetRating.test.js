import SetRating from "../SetRating";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

it("testing rating 5", () => {
  const rating = [
    <StarIcon fontSize="inherit" key={0} />,
    <StarIcon fontSize="inherit" key={1} />,
    <StarIcon fontSize="inherit" key={2} />,
    <StarIcon fontSize="inherit" key={3} />,
    <StarIcon fontSize="inherit" key={4} />,
  ];

  expect(JSON.stringify(SetRating(5))).toBe(JSON.stringify(rating));
});

it("testing rating 4.5", () => {
  const rating = [
    <StarIcon fontSize="inherit" key={0} />,
    <StarIcon fontSize="inherit" key={1} />,
    <StarIcon fontSize="inherit" key={2} />,
    <StarIcon fontSize="inherit" key={3} />,
    <StarHalfIcon fontSize="inherit" key={4} />,
  ];

  expect(JSON.stringify(SetRating(4.5))).toBe(JSON.stringify(rating));
});

it("testing rating 4", () => {
  const rating = [
    <StarIcon fontSize="inherit" key={0} />,
    <StarIcon fontSize="inherit" key={1} />,
    <StarIcon fontSize="inherit" key={2} />,
    <StarIcon fontSize="inherit" key={3} />,
    <StarBorderIcon fontSize="inherit" key={4} sx={{ color: "var(--main600)" }} />,
  ];

  expect(JSON.stringify(SetRating(4))).toBe(JSON.stringify(rating));
});
