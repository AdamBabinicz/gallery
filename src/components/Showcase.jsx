import React from "react";
import "../App.css";

const Showcase = ({ showcaseUrl }) => {
  return (
    <div className="gal">
      <img src={showcaseUrl}></img>
    </div>
  );
};

export default Showcase;
