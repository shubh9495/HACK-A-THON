import React from "react";
import { data } from "../assets/Api.js";
import "../CSS/cards.css"
import {ProjectCards} from './ProjectCards.jsx'

const Main = () => {
    //state variable 
    const [currele,setele] = React.useState(data);

    //function to show only pirticular type of card
    const filterItem = (arg) => {
      const updatedlist = data.filter((ele) => {
        return ele.group === arg;
      });
      setele(updatedlist);
    };

  return (
    <>
      <div id="buttons">
        <button
          className="category"
          onClick={() => {
            filterItem("mountains");
          }}
        >
          Mountains
        </button>

        <button
          className="category"
          onClick={() => {
            filterItem("rivers");
          }}
        >
          Rivers
        </button>

        <button
          className="category"
          onClick={() => {
            filterItem("Temples");
          }}
        >
          Temples
        </button>

        <button
          className="category"
          onClick={() => {
            setele(data);
          }}
        >
          Others
        </button>
      </div>

      <div id="parentcontainer">
        <div id="container">
          <ProjectCards data={currele} />
        </div>
      </div>
    </>
  );
};

export default Main;
