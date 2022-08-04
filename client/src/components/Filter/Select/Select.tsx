import React from 'react';
import './Select.css';

interface SelectProps {
  name: string;
  options: { title: string; value: string }[];
  onChange: any;
}

const Select: React.FC<SelectProps> = ({ name, options, onChange }) => {
  return (
    <div className='Select'>
      <select
        name={name}
        id={name}
        className='Select__select'
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      <label htmlFor={name} className='Select__label'>
        {name}
      </label>
    </div>
  );
};

export default Select;
