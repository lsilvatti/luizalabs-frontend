import sad_face from "assets/svg/face-frown-open-solid.svg";
import { Link } from "react-router-dom";

import "./NotFound.scss";

export default function NotFound() {
  return (
    <section className="luiza-heroes-not-found container">
      <img src={sad_face} />
      <h1>
        Ooops, parece que a página que você está tentando acessar não existe!
      </h1>
      <Link replace={true} to={".."}>
        Clique aqui para voltar a página inicial
      </Link>
    </section>
  );
}