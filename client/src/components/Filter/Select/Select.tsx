import React from 'react';
import './Select.css';

interface SelectProps {
  name: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ name, options }) => {
  return (
    <div className='Select'>
      <select name={name} id={name} className='Select__select'>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <label htmlFor={name} className='Select__label'>
        {name}
      </label>
    </div>
  );
};

export default Select;
