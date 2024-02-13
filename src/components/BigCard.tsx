
import bigCard from "../img/bigCard.png";
import menu from "../img/menu.png";
import like from "../img/like.png";
import dislike from "../img/dislike.png";
import save from "../img/save.png";



const BigCard = () => {
  return (
    <div className="big-card">
      <div className="big-card__content">
        <div className="big-card__text">
          <div className="big-card__info">
            <p className="big-card__date">April 20, 2021</p>
            <h2 className="big-card__title">
              Astronauts prep for new solar arrays on nearly seven-hour
              spacewalk...
            </h2>
            <p className="big-card__description">
              Astronauts Kayla Barron and Raja Chari floated out of the
              International Space Station airlock for a spacewalk Tuesday,
              installing brackets and struts to support new solar arrays to
              upgrade the research lab’s power system on the same day that
              crewmate Mark Vande Hei marked his 341st day in orbit, a U.S.
              record for a single spaceflight.
            </p>
          </div>

          <div className="big-card__image-container">
            <img src={bigCard} alt="Big Card" className="big-card__image" />
          </div>
        </div>
        <div className="big-card__icons">
          <div className="big-card__icons-group">
            <img src={like} alt="like" className="big-card__icon" />
            <img src={dislike} alt="dislike" className="big-card__icon" />
          </div>
          <div className="big-card__icons-group">
            <img src={save} alt="save" className="big-card__icon" />
            <img src={menu} alt="menu" className="big-card__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
