import { SearchBar } from "components/common";
import logo_menor from "assets/svg/logo_menor.svg";
import { Link } from "react-router-dom";

import "./CharacterHeader.scss";

export default function CharacterHeader() {
  return (
    <section className="luiza-heroes-character-header container">
      <div className="luiza-heroes-character-header__logo">
        <Link to={".."}>
          <img src={logo_menor} alt="" />
        </Link>
      </div>
      <SearchBar
        variant="secondary"
        placeholder="Procure por heróis"
      ></SearchBar>
      <div className="luiza-heroes-character-header__element"></div>
    </section>
  );
}
