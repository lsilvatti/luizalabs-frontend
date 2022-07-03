import favorito_01 from "assets/svg/favorito_01.svg";
import favorito_02 from "assets/svg/favorito_02.svg";
import favorito_03 from "assets/svg/favorito_03.svg";
import { Character } from "components/types";

import { useEffect, useState } from "react";
import { getFavoriteList, removeFavorite, setFavorite } from "utils";

import "./Favorite.scss";

interface FavoriteProps {
  character: Character;
}

function Favorite(props: FavoriteProps) {
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const { character } = props;

  useEffect(() => {
    const favoriteList = getFavoriteList();
    if (favoriteList.find((element) => element.id === character.id))
      setFavoriteIcon(true);
  }, []);

  const handleClick = () => {
    if (favoriteIcon) {
      setFavoriteIcon(!removeFavorite(character));
      return;
    }
    setFavoriteIcon(setFavorite(character));
  };

  return (
    <>
      <img
        onClick={handleClick}
        className="favorite__icon"
        src={favoriteIcon ? favorito_01 : favorito_02}
      ></img>
    </>
  );
}

Favorite.defaultProps = {};

export default Favorite;
