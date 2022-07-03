import { useGetCharacters } from "hooks";
import CharacterCard from "../CharacterCard/CharacterCard";
import CardGridOptions from "./CardGridOptions";
import "./CardGrid.scss";
import { useEffect, useState } from "react";
import { Character, orderBy } from "components/types";
import { Loading } from "components/common";
import CardGridPagination from "./CardGridPagination";
import { getFavoriteList } from "utils";
import face_sad from "assets/svg/face-frown-open-solid.svg";

export default function CardGrid() {
  const [alphabeticOrder, setAlphabeticOrder] = useState<orderBy>("name");
  const [page, setPage] = useState(0);
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [heroList, setHeroList] = useState<Character[]>();
  const [count, setCount] = useState(0);
  const { data, loading, error } = useGetCharacters("", alphabeticOrder, page);

  useEffect(() => {
    const storageFavorite = getFavoriteList();
    if (favoriteOnly && storageFavorite) {
      console.log(favoriteOnly);
      setHeroList(storageFavorite);
      setCount(storageFavorite.length);
      return;
    }

    if (data) {
      console.log(data);
      setCount(data.total);
      setHeroList(data.results);
    }
    if (loading) setCount(0);
  }, [data, loading, favoriteOnly, page]);

  return (
    <section className="card-grid container">
      <div className="card-grid__header">
        <span className="card-grid__info">
          {loading
            ? "Carregando listagem"
            : count
            ? `Encontrados ${count} heróis`
            : "Não foram encontrados heróis"}
        </span>
        <CardGridOptions
          setAlphabetic={setAlphabeticOrder}
          setFavoritesOnly={setFavoriteOnly}
          loading={loading}
        ></CardGridOptions>
      </div>
      {heroList && !loading && data ? (
        <section className="card-grid__main">
          <div className="card-grid__grid">
            {heroList.map((character, index, array) => {
              return (
                <CharacterCard
                  key={character.id}
                  character={character}
                ></CharacterCard>
              );
            })}
          </div>
          {count > 20 && (
            <CardGridPagination
              setActivePage={setPage}
              count={count}
              activePage={page}
            ></CardGridPagination>
          )}
          {(!count || error) && (
            <div className="card-grid__no-results">
              <img src={face_sad} alt="" />
              <span>{error ? error : "Não há resultados para mostrar!"}</span>
            </div>
          )}
        </section>
      ) : (
        <Loading></Loading>
      )}
    </section>
  );
}
