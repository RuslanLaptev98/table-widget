import React from 'react';
import Filter from './components/Filter';
import Table from './components/Table';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Filter />
      <Table />
    </div>
  );
};

export default App;
