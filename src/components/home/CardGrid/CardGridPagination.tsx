import React, { useEffect, useState } from "react";
import left_arrow from "assets/svg/chevron-left-solid.svg";
import right_arrow from "assets/svg/chevron-right-solid.svg";

import "./CardGridPagination.scss";

interface CardGridPaginationProps {
  setActivePage: Function;
  count: number;
  activePage: number;
}

export default function CardGridPagination(props: CardGridPaginationProps) {
  const { setActivePage, count, activePage } = props;
  const [totalPages, setTotalPages] = useState(Math.ceil(count / 20));

  const setNextPage = () => {
    setActivePage(activePage + 1);
  };

  const setPreviousPage = () => {
    setActivePage(activePage - 1);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(count / 20));
  }, [count]);

  return (
    <div className="card-grid-pagination">
      {activePage !== 0 && (
        <img
          className="card-grid-pagination__left"
          onClick={setPreviousPage}
          src={left_arrow}
          alt=""
        />
      )}
      <span className="card-grid-pagination__index">
        Página {activePage + 1} de {totalPages}
      </span>
      {activePage < totalPages - 1 && (
        <img
          className="card-grid-pagination__right"
          onClick={setNextPage}
          src={right_arrow}
          alt=""
        />
      )}
    </div>
  );
}
