import logo from "assets/svg/logo.svg";
import { SearchBar } from "components/common";
import { CardGrid } from "components/home";

import "./Home.scss";

export default function Home() {
  return (
    <main className="luiza-heroes-home">
      <div className={"luiza-heroes-home__header container"}>
        <img src={logo} />
        <h1>Explore o Universo</h1>
        <p>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve
        </p>
        <SearchBar placeholder="Procure por heróis"></SearchBar>
      </div>

      <CardGrid></CardGrid>
    </main>
  );
}
