import "./CharacterComics.scss";
import { Comic } from "components/types";
import { useState } from "react";

interface CharacterComicsProps {
  comics: Comic[];
}

export default function CharacterComics(props: CharacterComicsProps) {
  const { comics } = props;
  const [lastComics] = useState<Comic[]>(
    comics.filter((value, index) => {
      return index < 10;
    })
  );

  return (
    <div className="luiza-heroes-character-comics container container--sm">
      <h2>Ultimos Lançamentos</h2>
      {!lastComics.length && <p> Não há lançamentos para este personagem</p>}
      <div className="luiza-heroes-character-comics__grid">
        {lastComics.map((comic, index) => {
          const comicDetailUrl = comic.urls.find(
            (element) => element.type === "detail"
          );
          return (
            <a
              href={comicDetailUrl ? comicDetailUrl.url : ""}
              target="_blank"
              rel="noreferrer"
              className="luiza-heroes-character-comics__comic"
              key={comic.id}
            >
              <img
                src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <span>{comic.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
