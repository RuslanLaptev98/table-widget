import React from 'react';
import { observer } from 'mobx-react-lite';
import tableStore from '../../stores/tableStore';
import TableRow from './TableRow';
import TableHead from './TableHead';
import TablePagination from './TablePagination';

const Table: React.FC = () => {
  React.useEffect(() => {
    tableStore.fetchData({
      column: 'title',
      condition: 'contains',
      value: '',
      page: tableStore.page,
    });
  }, [tableStore.page]);

  return (
    <section>
      <TablePagination />
      <TableHead rows={['Date', 'Name', 'Quantity', 'Distance']} />
      {tableStore.data?.map((row) => (
        <TableRow key={row.title} row={row} />
      ))}
      <TablePagination />
    </section>
  );
};

export default observer(Table);
