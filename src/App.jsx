import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Image from "./components/Image";
import Showcase from "./components/Showcase";
import firebase from "./firebase";
import "./App.css";

// const Comp = () => React.createElement("h1", {}, "Hello!");

const App = () => {
  const [showcaseUrl, setShowcaseUrl] = useState("");
  const [images, setImages] = useState([]);
  const [newImageUrl, setNewImageUrl] = useState("");

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("Images")
      .get()
      .then((images) => {
        console.log(images);
        const loadedImages = images.docs.map((image) => image.data().url);
        console.log(loadedImages);
        setImages(loadedImages);
      });
    return () => unsub();
  }, []);

  const imageComponents = images.map((url) => {
    return <Image key={url} url={url} setShowcaseUrl={setShowcaseUrl} />;
  });

  const handleOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setImages([...images, newImageUrl]);
    firebase.firestore().collection("Images").add({ url: newImageUrl });
  };

  return (
    <>
      <form className="form">
        <input
          type="text"
          value={newImageUrl}
          placeholder="url..."
          onChange={(event) => setNewImageUrl(event.target.value)}
        ></input>
        <button onClick={handleOnClick}>Dodaj</button>
      </form>

      {imageComponents}
      <Showcase showcaseUrl={showcaseUrl} />
    </>
  );
};
// ReactDom.render(React.createElement(Comp), document.getElementById("root"));
ReactDom.render(<App />, document.getElementById("root"));
