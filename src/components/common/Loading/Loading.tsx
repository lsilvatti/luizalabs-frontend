import ball_triangle from "assets/svg/ball-triangle.svg";
import React from "react";

import "./Loading.scss";

export default function Loading() {
  return (
    <section className="luizaheroes-marvel__loading">
      <img src={ball_triangle} />
    </section>
  );
}
