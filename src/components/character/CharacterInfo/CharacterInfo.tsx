import "./CharacterInfo.scss";
import ic_quadrinhos from "assets/svg/ic_quadrinhos.svg";
import ic_trailer from "assets/svg/ic_trailer.svg";
import avaliacao_on from "assets/svg/avaliacao_on.svg";
import avaliacao_off from "assets/svg/avaliacao_off.svg";
import { Favorite } from "components/common";
import { Character, Comic } from "components/types";
import { useMediaQuery } from "hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CharacterInfoProps {
  character: Character;
  lastComic: Comic;
}

export default function CharacterInfo(props: CharacterInfoProps) {
  const { character, lastComic } = props;

  const mobileBreakpoint = useMediaQuery("(min-width: 576px)");
  const [rating] = useState(Math.round(Math.random() * 4) + 1);
  const [lastComicDate, setLastComicDate] = useState<String>();

  useEffect(() => {
    let date = "não há quadrinhos para este personagem";
    if (lastComic)
      date = new Date(lastComic.dates[0].date).toLocaleDateString("pt-BR");

    setLastComicDate(date);
  }, [lastComic]);

  return (
    <div className="luiza-heroes-character-info container container--sm">
      <span className="luiza-heroes-character-info__bg-name">
        {character.name}
      </span>
      <div className="luiza-heroes-character-info__details">
        <Link className="luiza-heroes-character-info__back" to={".."}>
          Voltar para a busca
        </Link>
        <div className="luiza-heroes-character-info__title">
          <h1>{character.name}</h1>
          <Favorite character={character} />
        </div>
        {!mobileBreakpoint && (
          <div className="luiza-heroes-character-info__img-area luiza-heroes-character-info__img-area--mobile">
            <img
              className="luiza-heroes-character-info__img luiza-heroes-character-info__img--mobile"
              src={`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        )}
        <p>{character.description}</p>
        <div className="luiza-heroes-character-info__stat">
          <div>
            <p>Quadrinhos</p>
            <div>
              <img src={ic_quadrinhos} alt="" />
              <span>{character.comics.available}</span>
            </div>
          </div>
          <div>
            <p>Filmes</p>
            <div>
              <img src={ic_trailer} alt="" />
              <span>{character.events.available}</span>
            </div>
          </div>
        </div>

        <div className="luiza-heroes-character-info__rating">
          <span>Rating: </span>
          {[...Array(5)].map((value, index) => {
            return (
              <img
                key={index}
                src={index >= rating ? avaliacao_off : avaliacao_on}
                alt=""
              />
            );
          })}
        </div>
        <p className="luiza-heroes-character-info__last-comic">
          <span>Ultimo quadrinho: </span>
          {lastComicDate}
        </p>
      </div>

      {mobileBreakpoint && (
        <div className="luiza-heroes-character-info__img-area luiza-heroes-character-info__img-area--desktop">
          <div style={{ position: "relative" }}>
            <div className="luiza-heroes-character-info__img-bg"></div>
            <img
              alt={character.name}
              className="luiza-heroes-character-info__img luiza-heroes-character-info__img--desktop"
              src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
