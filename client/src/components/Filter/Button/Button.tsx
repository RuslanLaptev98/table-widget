import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <div className='Button'>{text}</div>;
};

export default Button;
