import type { NextPage, GetServerSideProps } from "next";

import {
  fetchTvShowData,
  getHomeList,
  ITMDBListResponse,
  ITMDBSpecificTvShow,
} from "../services/tmdbApi";
import LandingPage from "../components/LandingPage";
import LoadingModal from "../components/LoadingModal";

export interface IMoviesData {
  slug: string;
  title: string;
  items: ITMDBListResponse;
}

interface IProps {
  dataList: IMoviesData[];
  featured: ITMDBSpecificTvShow;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const listResponse = await getHomeList();

  const [originalsFilter] = listResponse.filter(
    (movie) => (movie.slug = "originals")
  );

  const randomIndex = Math.floor(
    Math.random() * originalsFilter.items.results.length
  );

  const randomFeatured = originalsFilter.items.results[randomIndex];

  const featuredResponse = await fetchTvShowData(randomFeatured.id);

  return {
    props: {
      dataList: listResponse,
      featured: featuredResponse,
    },
  };
};

const Home: NextPage<IProps> = ({ dataList, featured }) => {
  if (dataList.length <= 0) {
    return <LoadingModal />;
  }

  return <LandingPage featured={featured} moviesList={dataList} />;
};

export default Home;
