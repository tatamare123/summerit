import React, { useState } from 'react';

const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];

const ColorButtonArray: React.FC = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);

  const changeBackgroundColor = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[nextColorIndex];
    setCurrentColorIndex(nextColorIndex);
  };

  return (
    <button onClick={changeBackgroundColor}>
      Change Background Color from Array
    </button>
  );
};

export default ColorButtonArray;
