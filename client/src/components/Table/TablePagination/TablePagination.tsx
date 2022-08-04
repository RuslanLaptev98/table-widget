import React from 'react';
import tableStore from '../../../stores/tableStore';
import './TablePagination.css';
import { observer } from 'mobx-react-lite';

const TablePagination: React.FC = () => {
  return (
    <div className='TablePagination'>
      <button
        className={`TablePagination__button ${
          tableStore.page === 1 ? 'TablePagination__button-disabled' : ''
        }`}
        onClick={tableStore.prevPage}
        disabled={tableStore.page === 1 ? true : false}
      >
        {'<'}
      </button>
      <span className='TablePagination__page'>Page {tableStore.page}</span>
      <button
        className={`TablePagination__button ${
          tableStore.data.length < 10 ? 'TablePagination__button-disabled' : ''
        }`}
        onClick={tableStore.nextPage}
        disabled={tableStore.data.length < 10 ? true : false}
      >
        {'>'}
      </button>
    </div>
  );
};

export default observer(TablePagination);
