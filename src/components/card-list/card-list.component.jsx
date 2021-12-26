import React from "react";
import { Cards } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((data) => (
        <Cards key={data.id} monster={data} />
      ))}
    </div>
  );
};
