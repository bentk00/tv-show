import s from "./style.module.css"
import {FiveStarRating} from "../FiveStarRating/FiveStarRating";

export function TVShowDetail({tvShow}: any) {

    const rating: number = tvShow.vote_average / 2;
    return (
        <>
            <div className={s.title}>{tvShow.name}</div>
            <div className={s.rating_container}>
                <FiveStarRating rating={rating}/>
                <div className={s.rating}>{rating}/5</div>
            </div>
            <div className={s.overview}>{tvShow.overview}</div>
        </>
    )

}