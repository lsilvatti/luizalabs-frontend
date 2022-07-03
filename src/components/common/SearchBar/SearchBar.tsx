import ic_busca from "assets/svg/ic_busca.svg";
import ic_busca_menor from "assets/svg/ic_busca_menor.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./SearchBar.scss";

interface SearchBarProps {
  variant: "primary" | "secondary";
  placeholder?: string;
}

function SearchBar(props: SearchBarProps) {
  const { nameStartsWith } = useParams<"nameStartsWith">();
  const { variant, placeholder } = props;
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (nameStartsWith) setSearchInput(nameStartsWith);
  }, []);

  const doSearch = () => {
    if (searchInput) {
      navigate(`/busca/${searchInput}`);
      return;
    }
    navigate("..", { replace: true });
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setSearchInput(enteredName);
  };

  const handleKeywordKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == "Enter") {
      doSearch();
    }
  };

  return (
    <div className={`search-bar search-bar--${variant}`}>
      <img
        onClick={doSearch}
        src={variant === "primary" ? ic_busca : ic_busca_menor}
        alt=""
      ></img>
      <input
        onKeyDown={handleKeywordKeyPress}
        onChange={handleSearchInput}
        value={searchInput}
        placeholder={placeholder}
        type={"text"}
      ></input>
    </div>
  );
}

SearchBar.defaultProps = {
  variant: "primary",
};

export default SearchBar;
