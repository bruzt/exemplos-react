import axios from "axios";

export interface ITMDBListResults {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name?: string;
  title?: string;
  origin_country: string[];
  original_language: string;
  original_name?: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface ITMDBSpecificMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITMDBSpecificTvShow {
  backdrop_path: string | null;
  created_by: [];
  episode_run_time: number[];
  first_air_date: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  in_production: false;
  languages: [];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: 1;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: string | null;
  networks: Array<{
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: [];
  seasons: Array<{
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  }>;
  spoken_languages: [];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ITMDBListResponse {
  page: number;
  results: ITMDBListResults[];
  total_pages: number;
  total_results: number;
}

const apiParams = {
  language: "pt-BR",
  api_key: process.env.TMDB_API_KEY,
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

async function fetchTmdbList(endpoint: string) {
  try {
    const response = await api.get<ITMDBListResponse>(endpoint, {
      params: apiParams,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }
}

export async function fetchMovieData(movieId: number) {
  try {
    const response = await api.get<ITMDBSpecificMovie>(`/movie/${movieId}`, {
      params: apiParams,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchTvShowData(TvShowId: number) {
  try {
    const response = await api.get<ITMDBSpecificTvShow>(`/tv/${TvShowId}`, {
      params: apiParams,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getHomeList() {
  return [
    {
      slug: "originals",
      title: "Originais do Netflix",
      items: await fetchTmdbList(`/discover/tv?with_network=213`),
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: await fetchTmdbList(`/trending/all/week`),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: await fetchTmdbList(`/movie/top_rated`),
    },
    {
      slug: "action",
      title: "Ação",
      items: await fetchTmdbList(`/discover/movie?with_genres=28`),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await fetchTmdbList(`/discover/movie?with_genres=35`),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await fetchTmdbList(`/discover/movie?with_genres=27`),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await fetchTmdbList(`/discover/movie?with_genres=10749`),
    },
    {
      slug: "documentary",
      title: "Documentários",
      items: await fetchTmdbList(`/discover/movie?with_genres=99`),
    },
  ];
}
