import React from 'react';
import Row from '../../../types/Row';
import './TableRow.css';
import TableRowCell from './TableRowCell';

interface TableRowProps {
  row: Row;
}

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  return (
    <div className='TableRow'>
      <TableRowCell text={row.date} />
      <TableRowCell text={row.title} />
      <TableRowCell text={row.quantity} />
      <TableRowCell text={row.distance} />
    </div>
  );
};

export default TableRow;
