import React from 'react';
import Row from '../../../types/Row';

interface TableRowProps {
  row: Row;
}

const TableRow: React.FC<TableRowProps> = ({ row }) => {
  return <div>{row.title}</div>;
};

export default TableRow;
