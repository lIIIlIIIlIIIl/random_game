import React, { useState } from 'react';
import { data_map } from './data';
import './App.css';

const RandomImage = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const getRandomIndex = () => {
    const remainingImages = Object.keys(images).filter(key => !selectedImages.includes(key));

    if (remainingImages.length === 0) {
      alert("모든 이미지를 확인했습니다.");
      setSelectedImages([])
      setRandomIndex(0)
      return;
    }

    const newIndex = Math.floor(Math.random() * remainingImages.length);
    setRandomIndex(remainingImages[newIndex]);
    setSelectedImages([...selectedImages, remainingImages[newIndex]]);
  };

  return (
    <div className="random-image-container">
      <button onClick={getRandomIndex} className="randomize-button">{selectedImages.length === 0 ? "시작" : "다음"}</button>
      {randomIndex === 0 ? <></> : (
        <>
          <img src={require(`../public/images/${randomIndex}.png`)} alt={images[randomIndex]} className="random-image" />
          <p>{images[randomIndex]}</p>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <RandomImage images={data_map} />
    </div>
  );
};

export default App;
