import React from 'react';
import './Input.css';

interface InputProps {
  id: string;
  onChange: any;
}

const Input: React.FC<InputProps> = ({ id, onChange }) => {
  return (
    <div className='Input'>
      <input
        className='Input__input'
        placeholder=' '
        id={id}
        autoComplete='off'
        onChange={onChange}
      />
      <label className='Input__label' htmlFor={id}>
        Value
      </label>
    </div>
  );
};

export default Input;
