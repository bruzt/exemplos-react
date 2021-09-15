import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Container } from "./styles";

import { IMoviesData } from "../../pages/index";
import { useState } from "react";

interface MovieSectionListProps {
  listData: IMoviesData;
}

function MovieSectionList({ listData }: MovieSectionListProps) {
  const [listIndex, setListIndex] = useState(0);

  const moveLegth = process.browser
    ? Math.floor(window.innerWidth / 2 / 16)
    : 45;

  function handleMoveRight() {
    if (
      listIndex + moveLegth >
      listData.items.results.length * 9.375 -
        Math.floor(window.innerWidth / 16) +
        6.4
    ) {
      setListIndex(
        listData.items.results.length * 9.375 -
          Math.floor(window.innerWidth / 16) +
          6.4
      );
    } else {
      setListIndex(listIndex + moveLegth);
    }
  }

  function handleMoveLeft() {
    if (listIndex - moveLegth < 0) {
      setListIndex(0);
    } else {
      setListIndex(listIndex - moveLegth);
    }
  }

  return (
    <Container>
      <h2>{listData.title}</h2>

      <div className="list-area">
        <div className="arrow-container arrow-left">
          <button type="button" onClick={handleMoveLeft}>
            <MdKeyboardArrowLeft size="10rem" color="#eee" />
          </button>
        </div>

        <div className="arrow-container arrow-right">
          <button type="button" onClick={handleMoveRight}>
            <MdKeyboardArrowRight size="5rem" color="#eee" />
          </button>
        </div>

        <div
          className="list"
          style={{
            width: `${listData.items.results.length * 9.375}rem`,
            marginLeft: `-${listIndex}rem`,
          }}
        >
          {listData.items.results.length > 0 &&
            listData.items.results.map((movie) => (
              <figure
                key={movie.id}
                className="item"
                title={movie.name || movie.title}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.name || movie.title + " poster"}
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default MovieSectionList;
