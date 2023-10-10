import s from "./style.module.css"
import {StarFill, Star as StarEmpty, StarHalf} from "react-bootstrap-icons";

export function FiveStarRating({rating}: { rating: number }) {

    const starList = [];

    const starFillCount = Math.floor(rating);
    const hasStarHalf = rating - starFillCount >= 0.5
    const emptyStarCount = 5 - rating - (hasStarHalf ? 1 : 0)

    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i}/>)
    }

    if (hasStarHalf) {
        starList.push(<StarHalf key={"star-half"}/>)
    }

    for (let i = 1; i <= emptyStarCount; i++) {
        starList.push(<StarEmpty key={"star-empty" + i}/>)
    }

    return (
        <>
            {starList}
        </>
    )

}