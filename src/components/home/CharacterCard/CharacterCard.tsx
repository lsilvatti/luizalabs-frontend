import { Favorite } from "components/common";
import { Character, Image } from "components/types";
import { useGetCharacters } from "hooks";
import { createContext } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "./CharacterCard.scss";

interface CharacterCardProps {
  character: Character;
}

function CharacterCard(props: CharacterCardProps) {
  const { character } = props;

  return (
    <Link to={`../personagem/${character.id}`}>
      <div className="hero-card__main">
        <img
          className="hero-card__portrait"
          src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
        ></img>
        <div className="hero-card__info">
          <span>{character.name}</span>
          <Favorite character={character}></Favorite>
        </div>
      </div>
    </Link>
  );
}

CharacterCard.defaultProps = {
  character: {
    thumbnail: {
      path: "",
      extension: "",
    },
  },
};

export default CharacterCard;
