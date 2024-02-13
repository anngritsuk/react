import React from "react";
import lilCard from "../img/lilCard.png";
import menu from "../img/menu.png";
import like from "../img/like.png";
import dislike from "../img/dislike.png";
import save from "../img/save.png";

export default function LilCard() {
  return (
    <div className="lil-card">
      <div className="lil-card__content">
        <div className="lil-card__info">
          <div className="lil-card__text">
            <p className="lil-card__date">April 20, 2021</p>
            <h2 className="lil-card__title">
              Astronauts prep for new solar arrays on nearly seven-hour
              spacewalk
            </h2>
          </div>
          <div className="lil-card__image-container">
            <img src={lilCard} alt="lil Card" className="lil-card__image" />
          </div>
        </div>
        <div className="lil-card__icons">
          <div className="lil-card__icons-group">
            <img src={like} alt="like" className="lil-card__icon" />
            <img src={dislike} alt="dislike" className="lil-card__icon" />
          </div>
          <div className="lil-card__icons-group">
            <img src={save} alt="save" className="lil-card__icon" />
            <img src={menu} alt="menu" className="lil-card__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
