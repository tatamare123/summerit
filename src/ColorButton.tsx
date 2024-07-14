import React from 'react';

interface ColorButtonProps {
  color: string;
  text: string;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color, text }) => {
  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = color;
  };

  return (
    <button onClick={changeBackgroundColor}>
      {text}
    </button>
  );
};

export default ColorButton;
