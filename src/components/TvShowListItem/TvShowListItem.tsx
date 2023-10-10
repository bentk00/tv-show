import {TvShow} from "../../models/TvShow";
import {SMALL_IMG_COVER_BASE_URL} from "../../Config";
import s from "./style.module.css"

export function TvShowListItem({tvShow, onClick}: { tvShow : TvShow, onClick : any }) {
    return <div className={s.container} onClick={() => onClick(tvShow)}>
        <img className={s.image} src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path} alt={tvShow.name}/>
        <div className={s.title}>
            {tvShow.name}
        </div>
    </div>
}