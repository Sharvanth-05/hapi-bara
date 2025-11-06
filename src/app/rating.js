
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} />);
  }

  return stars;
}