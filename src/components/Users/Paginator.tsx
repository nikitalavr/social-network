import React, { useState } from "react";
import style from "./Users.module.css";

type PaginatorPropsType = {
  totalPagesCount: number;
  portionSize: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Paginator = (props: PaginatorPropsType) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(props.totalPagesCount / props.portionSize); i++) {
    pages.push(i);
  } 

  const pagesPortion = Math.ceil(props.totalPagesCount / props.portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const portionBegin = (portionNumber - 1) * props.portionSize + 1;
  const portionEnd = portionNumber * props.portionSize;

  let pageNumberToRender = pages
    .filter((p) => p >= portionBegin && p <= portionEnd)
    .map((p) => (
      <span
        onClick={() => {
          props.setCurrentPage(p);
        }}
        className={props.currentPage === p ? style.selectedPage : ""}
      >
        {p}{" "}
      </span>
    ));
    console.log(pagesPortion)

  const onClickNextPortion = () => setPortionNumber(portionNumber + 1);
  const onClickPrevPortion = () => setPortionNumber(portionNumber - 1);
  return (
    <div>
      {portionNumber !== 1 && (
        <button onClick={onClickPrevPortion}>{"<"}</button>
      )}
      {pageNumberToRender}
      {portionNumber !== pagesPortion && (
        <button onClick={onClickNextPortion}>{">"}</button>
      )}
    </div>
  );
};

export default Paginator;
