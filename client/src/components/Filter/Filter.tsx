import React from 'react';
import Button from './Button';
import './Filter.css';
import Input from './Input';
import Select from './Select';

const Filter: React.FC = () => {
  return (
    <div className='Filter'>
      <Select
        name='Колонка'
        options={['Название', 'Количество', 'Расстояние']}
      />
      <Select
        name='Условие'
        options={['Больше', 'Меньше', 'Равно', 'Содержит']}
      />
      <Input />
      <Button text='Фильтровать' />
    </div>
  );
};

export default Filter;
