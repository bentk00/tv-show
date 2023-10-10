import {TvShow} from "../../models/TvShow";
import s from "./style.module.css"
import {TvShowListItem} from "../TvShowListItem/TvShowListItem";

export function TvShowList({tvShowList, onClickItem}: any) {
    return (
        <>
            <div className={s.title}>You may also like:</div>
            <div className={s.list}>
                {tvShowList.map((tvSHow: TvShow) => {
                    return (
                        <span key={tvSHow.id} className={s.tv_show_list_item}>
                            <TvShowListItem tvShow={tvSHow} onClick={onClickItem}/>
                        </span>
                    );
                })}
            </div>
        </>
    )
}