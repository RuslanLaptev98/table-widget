import React from 'react';
import tableStore from '../../../stores/tableStore';
import './TablePagination.css';
import { observer } from 'mobx-react-lite';

const TablePagination: React.FC = () => {
  return (
    <div className='TablePagination'>
      <button className='TablePagination__button' onClick={tableStore.prevPage}>
        {'<'}
      </button>
      <span className='TablePagination__page'>Page {tableStore.page}</span>
      <button className='TablePagination__button' onClick={tableStore.nextPage}>
        {'>'}
      </button>
    </div>
  );
};

export default observer(TablePagination);
