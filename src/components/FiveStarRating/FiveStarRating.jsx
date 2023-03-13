import s from "./style.module.css";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  //Initialize table of stars
  const starList = [];

  //Count number of star filled
  const starFillCount = Math.floor(rating);

  //Star half ? Yes or No
  const hasStarHalf = rating - starFillCount >= 0.5;

  //Count number of star empty
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  //Loop to fill stars
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  //Star half
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  //Loop to empty stars
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}
