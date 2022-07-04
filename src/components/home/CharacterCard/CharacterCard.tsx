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
    <div className="hero-card__main">
      <Link to={`../personagem/${character.id}`}>
        <img
          className="hero-card__portrait"
          src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
        ></img>
      </Link>

      <div className="hero-card__info">
        <Link to={`../personagem/${character.id}`}>
          <span>{character.name}</span>
        </Link>
        <Favorite character={character}></Favorite>
      </div>
    </div>
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
