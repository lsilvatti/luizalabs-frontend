import { Character } from "components/types";
import { getValue, setValue } from "./localStorage";

export function setFavorite(character: Character) {
  const favoriteList: number[] = getValue("favoriteList");
  console.log(favoriteList);
  const newfavoriteList = [...favoriteList, character];
  console.log(newfavoriteList);
  setValue("favoriteList", newfavoriteList);
  return true;
}

export function removeFavorite(character: Character) {
  const favoriteList: Character[] = getValue("favoriteList");
  const newfavoriteList = favoriteList.filter(
    (element) => element.id !== character.id
  );
  setValue("favoriteList", newfavoriteList);
  return true;
}

export function getFavoriteList(): Character[] {
  return getValue("favoriteList");
}
