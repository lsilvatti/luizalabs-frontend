import { Character } from "components/types";
import { getValue, setValue } from "./localStorage";

export function setFavorite(character: Character) {
  const favoriteList: Character[] = getValue("favoriteList");
  if (favoriteList.length === 5) {
    window.alert("Você atingiu o máximo de 5 personagens favoritados!");
    return false;
  }
  const newfavoriteList = [...favoriteList, character];
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
