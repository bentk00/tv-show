export interface TvShow {
    backdrop_path: string
    name: string;
    overview: string;
    vote_average: number;
    adult: boolean
    id: number
    original_language: string
    original_name: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    first_air_date: string
    vote_count: number
    origin_country: string[]
}