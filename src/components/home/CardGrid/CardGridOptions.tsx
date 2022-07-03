import ic_heroi from "assets/svg/ic_heroi.svg";
import favorito_01 from "assets/svg/favorito_01.svg";
import favorito_02 from "assets/svg/favorito_02.svg";
import toggle_on from "assets/svg/toggle_on.svg";
import toggle_off from "assets/svg/toggle_off.svg";
import { useState } from "react";

import "./CardGridOptions.scss";

interface CardGridOptionsProps {
  setAlphabetic: Function;
  setFavoritesOnly: Function;
  loading: boolean;
}

export default function CardGridOptions(props: CardGridOptionsProps) {
  const [order, setOrder] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { setAlphabetic, setFavoritesOnly, loading } = props;

  const handleOrderClick = () => {
    if (loading) return;
    setOrder(!order);
    setAlphabetic(order ? "name" : "-name");
  };

  const handleFavoriteClick = () => {
    if (loading) return;
    setFavorite(!favorite);
    setFavoritesOnly(!favorite);
  };

  return (
    <div
      className={`card-grid-options ${
        loading ? "card-grid-options--loading" : ""
      }`}
    >
      {!favorite && (
        <div className="card-grid-options__order">
          <img src={ic_heroi} alt="" />
          <span>Ordenar por nome - A/Z</span>
          <img
            onClick={handleOrderClick}
            src={order ? toggle_on : toggle_off}
            alt=""
          />
        </div>
      )}
      <div
        className="card-grid-options__favorite"
        onClick={handleFavoriteClick}
      >
        <img src={favorite ? favorito_01 : favorito_02} alt="" />
        <span>Somente favoritos</span>
      </div>
    </div>
  );
}
