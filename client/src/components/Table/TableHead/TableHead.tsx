import React from 'react';
import TableHeadCell from './TableHeadCell';
import './TableHead.css';

interface TableHeadProps {
  rows: string[];
}

const TableHead: React.FC<TableHeadProps> = ({ rows }) => {
  return (
    <div className='TableHead'>
      {rows.map((row) => (
        <TableHeadCell text={row} />
      ))}
    </div>
  );
};

export default TableHead;
