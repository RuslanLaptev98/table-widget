import React from 'react';
import './Input.css';

interface InputProps {
  id: string;
}

const Input: React.FC<InputProps> = ({ id }) => {
  return (
    <div className='Input'>
      <input
        className='Input__input'
        placeholder=' '
        id={id}
        autoComplete='off'
      />
      <label className='Input__label' htmlFor={id}>
        Value
      </label>
    </div>
  );
};

export default Input;
