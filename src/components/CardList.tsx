import "../styles/CardList.css"; // Подключаем файл стилей

import MidleCard from "./MidleCard";
import LilCard from "./LilCard";
import BigCard from "./BigCard";

const CardList = () => {
  return (
    <div className="card-list">
      <div className="first">
        <div className="big-card-item">
          <BigCard />
        </div>

        <div className="card-row">
          <div className="midle-card-column">
            <MidleCard />
            <MidleCard />
          </div>
          <div className="midle-card-column">
            <MidleCard />
            <MidleCard />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="lil-card-column">
          <LilCard />
          <LilCard />
          <LilCard />
          <LilCard />
          <LilCard />
          <LilCard />
          <LilCard />
        </div>
      </div>
    </div>
  );
};

export default CardList;



    