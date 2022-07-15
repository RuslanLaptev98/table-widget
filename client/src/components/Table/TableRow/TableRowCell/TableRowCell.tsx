import React from 'react';
import './TableRowCell.css';

interface TableRowCellProps {
  text: string;
}

const TableRowCell: React.FC<TableRowCellProps> = ({ text }) => {
  return <div className='TableRowCell'>{text}</div>;
};

export default TableRowCell;
