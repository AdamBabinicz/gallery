import React from "react";
import "../App.css";

const Image = ({ url, setShowcaseUrl }) => {
  const handleOnClick = (event) => {
    setShowcaseUrl(url);
  };
  return <img src={url} onClick={handleOnClick}></img>;
};

export default Image;
