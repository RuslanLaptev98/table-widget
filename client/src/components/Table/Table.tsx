import React from 'react';
import { observer } from 'mobx-react-lite';
import tableStore from '../../stores/tableStore';
import TableRow from './TableRow';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import filterStore from '../../stores/filterStore';

const Table: React.FC = () => {
  React.useEffect(() => {
    tableStore.fetchData({
      column: filterStore.column,
      condition: filterStore.condition,
      value: filterStore.value,
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
