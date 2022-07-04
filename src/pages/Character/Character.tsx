import {
  CharacterComics,
  CharacterHeader,
  CharacterInfo,
} from "components/character";
import { Loading } from "components/common";
import { useGetCharacterById } from "hooks";
import useGetComics from "hooks/useGetComics";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Character.scss";

export default function Character() {
  const { id } = useParams<"id">();
  const [characterId, setCharacterId] = useState<number>(0);
  const {
    data: character,
    loading: loadingCharacter,
    error: errorCharacter,
  } = useGetCharacterById(characterId);
  const {
    data: comics,
    loading: loadingComics,
    error: errorComics,
  } = useGetComics(characterId);

  useEffect(() => {
    if (character)
      document.title = `Luizalabs Heroes - Personagem - ${character.name}`;
  }, [character]);

  useEffect(() => {
    if (id) {
      setCharacterId(parseInt(id));
    }
  }, [id]);
  return (
    <section className="luiza-heroes-character">
      {!loadingCharacter && character && !loadingComics && comics ? (
        <>
          <CharacterHeader />
          <CharacterInfo character={character} lastComic={comics.results[0]} />
          <CharacterComics comics={comics.results}></CharacterComics>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
}
