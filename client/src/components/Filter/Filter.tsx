import React from 'react';
import Button from './Button';
import './Filter.css';
import Input from './Input';
import Select from './Select';

const Filter: React.FC = () => {
  return (
    <section className='Filter'>
      <Select name='column' options={['Name', 'Quantity', 'Distance']} />
      <Select
        name='condition'
        options={['More', 'Less', 'Equals', 'Contains']}
      />
      <Input id='value' />
      <Button text='Filter' />
    </section>
  );
};

export default Filter;
