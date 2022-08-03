import React from 'react';
import { observer } from 'mobx-react-lite';
import tableStore from '../../stores/tableStore';
import TableRow from './TableRow';
import TableHead from './TableHead';

const Table: React.FC = () => {
  React.useEffect(() => {
    tableStore.fetchData({ column: 'title', condition: 'contains', value: '' });
  }, []);
  return (
    <div>
      <TableHead rows={['Date', 'Name', 'Quantity', 'Distance']} />
      {tableStore.data?.map((row) => (
        <TableRow key={row.title} row={row} />
      ))}
    </div>
  );
};

export default observer(Table);
