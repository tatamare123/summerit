import React from 'react';

const RandomColor: React.FC = () => {
  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <button onClick={changeBackgroundColor}>
      Change Background to Random Color
    </button>
  );
};

export default RandomColor;
