import { observer } from 'mobx-react-lite';
import React from 'react';
import filterStore from '../../stores/filterStore';
import Button from './Button';
import './Filter.css';
import Input from './Input';
import Select from './Select';

const Filter: React.FC = () => {
  return (
    <section className='Filter'>
      <Select
        name='Column'
        options={[
          { title: 'Name', value: 'title' },
          { title: 'Quantity', value: 'quantity' },
          { title: 'Distance', value: 'distance' },
        ]}
        onChange={(e: any) => filterStore.setColumn(e.target.value)}
      />
      <Select
        name='Condition'
        options={[
          { title: 'Contains', value: 'contains' },
          { title: 'More', value: 'greater' },
          { title: 'Less', value: 'less' },
          { title: 'Equals', value: 'equals' },
        ]}
        onChange={(e: any) => filterStore.setCondition(e.target.value)}
      />
      <Input
        id='value'
        onChange={(e: any) => filterStore.setValue(e.target.value)}
      />
      <Button text='Filter' />
    </section>
  );
};

export default observer(Filter);
