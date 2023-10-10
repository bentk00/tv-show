import "./global.css"
import s from "./style.module.css"
import {TVShowsAPI} from "./api/tv-show";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./Config";
import {TvShow} from "./models/TvShow";
import {TVShowDetail} from "./components/TvShowDetail/TVShowDetail";
import {Logo} from "./components/Logo/Logo";
import logo from "./assets/images/logo.png"
import {TvShowListItem} from "./components/TvShowListItem/TvShowListItem";
import {log} from "util";
import {TvShowList} from "./components/TvShowList/TvShowList";
import {SearchBar} from "./components/SearchBar/SearchBar";

export function App() {

    const [currentTVShow, setCurrentTVShow] = useState<TvShow>();
    const [recommendationList, setRecommendationList] = useState([]);


    async function fetchPoulars() {
        const populars = await TVShowsAPI.fetchPopulars();
        if (populars.length > 0) {
            setCurrentTVShow(populars[1])
        }
    }

    async function fetchRecommendations(tvShowId: any) {
        const recommendations = await TVShowsAPI.fetchRecommendations(tvShowId);
        if (recommendations.length > 0) {
            setRecommendationList(recommendations)
        }
    }

    useEffect(() => {
        fetchPoulars()
    }, []);

    useEffect(() => {
        if( currentTVShow){
            fetchRecommendations(currentTVShow.id).then(r => console.log('OK'));
        }
    }, [currentTVShow]);


    async function searchTvShow(tvShowName: string) {
        const response = await TVShowsAPI.fetchByTitle(tvShowName);
        if(response.length > 0){
            setCurrentTVShow(response[0])
        }
    }

    return (
        <div className={s.main_container} style={
            {
                background: currentTVShow
                    ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                    : "black"
            }
        }>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo image={logo} title="Ben Watch" subtitle="Find a show you may like"/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <SearchBar onSubmit={searchTvShow} />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTVShow && <TVShowDetail tvShow={currentTVShow}/>}
            </div>
            <div className={s.recommendations}>
                {recommendationList && recommendationList.length > 0 &&  <TvShowList
                    onClickItem={setCurrentTVShow}
                    tvShowList = {recommendationList}
                />}
            </div>
        </div>

    )
}