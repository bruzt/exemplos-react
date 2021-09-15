import { ITMDBSpecificTvShow } from "../../services/tmdbApi";
import { IMoviesData } from "../../pages/index";
import FeaturedMovie from "../FeaturedMovie";
import MoviesSectionList from "../MoviesSectionList";
import Header from "../Header";
import Footer from "../Footer";

import { Container } from "./styles";

interface LandingPageProps {
  featured: ITMDBSpecificTvShow;
  moviesList: IMoviesData[];
}

function LandingPage({ moviesList, featured }: LandingPageProps) {
  return (
    <>
      <Header />

      <Container>
        <FeaturedMovie featured={featured} />

        <section className="lists">
          {moviesList.map((data, index) => (
            <MoviesSectionList key={index} listData={data} />
          ))}
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default LandingPage;
