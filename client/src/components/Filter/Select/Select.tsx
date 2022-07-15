import React from 'react';
import './Select.css';

interface SelectProps {
  name: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ name, options }) => {
  return (
    <select name={name} className='Select'>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
