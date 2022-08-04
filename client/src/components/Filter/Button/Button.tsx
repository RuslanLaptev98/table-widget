import React from 'react';
import filterStore from '../../../stores/filterStore';
import tableStore from '../../../stores/tableStore';
import './Button.css';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div
      className='Button'
      onClick={() => {
        tableStore.fetchData({
          column: filterStore.column,
          condition: filterStore.condition,
          value: filterStore.value,
          page: tableStore.page,
        });
        tableStore.firstPage();
      }}
    >
      {text}
    </div>
  );
};

export default Button;
