import React from "react";
import midleCard from "../img/midleCard.png";
import menu from "../img/menu.png";
import like from "../img/like.png";
import dislike from "../img/dislike.png";
import save from "../img/save.png";

export default function MidleCard() {
  return (
    <div className="midle-card">
      <div className="midle-card__content">
        <div className="midle-card__info">
          <div className="midle-card__image-container">
            <img
              src={midleCard}
              alt="midle Card"
              className="midle-card__image"
            />
          </div>
          <p className="midle-card__date">April 20, 2021</p>
          <h2 className="midle-card__title">
            Astronauts prep for new solar arrays on nearly seven-hour spacewalk
          </h2>
        </div>
        <div className="midle-card__icons">
          <div className="midle-card__icons-group">
            <img src={like} alt="like" className="midle-card__icon" />
            <img src={dislike} alt="dislike" className="midle-card__icon" />
          </div>
          <div className="midle-card__icons-group">
            <img src={save} alt="save" className="midle-card__icon" />
            <img src={menu} alt="menu" className="midle-card__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
