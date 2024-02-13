import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import App from "./components/App";
import Title from "./components/Title";
import Tab from "./components/Tab";
import BigCard from "./components/BigCard";
import MidleCard from "./components/MidleCard";
import LilCard from "./components/LilCard";
import CardList from "./components/CardList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Title />
    <Tab />
    {/* <App /> */}
    {/* <BigCard />
    <MidleCard />
    <LilCard /> */}
    <CardList />
  </React.StrictMode>
);
