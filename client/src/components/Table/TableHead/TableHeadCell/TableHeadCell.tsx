import React from 'react';
import './TableHeadCell.css';

interface TableHeadCellProps {
  text: string;
}

const TableHeadCell: React.FC<TableHeadCellProps> = ({ text }) => {
  return <div className='TableHeadCell'>{text}</div>;
};

export default TableHeadCell;
