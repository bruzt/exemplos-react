import { MouseEvent } from "react";
import { ITMDBSpecificTvShow } from "../../services/tmdbApi";
import { Container } from "./styles";

interface FeaturedMovieProps {
  featured: ITMDBSpecificTvShow;
}

function FeaturedMovie({ featured }: FeaturedMovieProps) {
  function handlePlayButton(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();
  }

  function handleAddToListButton(
    event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ) {
    event.preventDefault();
  }

  const concatGenreNames: string[] = [];
  featured.genres.forEach((genre) => {
    concatGenreNames.push(genre.name);
  });

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${featured.backdrop_path})`,
      }}
    >
      <div className="vertical-transparency">
        <div className="horizontal-transparency">
          <div className="name">{featured.name}</div>

          <div className="info">
            <div className="points">{featured.vote_average} pontos</div>

            <div className="year">
              {new Date(featured.first_air_date).getFullYear()}
            </div>

            {featured.number_of_seasons && (
              <div className="seasons-number">
                {featured.number_of_seasons} Temporada
                {featured.number_of_seasons > 1 && "s"}
              </div>
            )}
          </div>
          <div className="description">{featured.overview}</div>
          <div className="buttons">
            <a
              className="button play-button"
              href={`/watch/${featured.id}`}
              onClick={handlePlayButton}
            >
              ► Assistir
            </a>
            <a
              className="button add-list-button"
              href={`/list/add/${featured.id}`}
              onClick={handleAddToListButton}
            >
              + Minha Lista
            </a>
          </div>
          <div className="genres">
            <strong>Gêneros: </strong>
            {concatGenreNames.join(", ")}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FeaturedMovie;
