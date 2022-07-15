import React from 'react';
import { observer } from 'mobx-react-lite';
import tableStore from '../../stores/tableStore';
import TableRow from './TableRow';
import TableHead from './TableHead';

const Table: React.FC = () => {
  React.useEffect(() => {
    tableStore.fetchData();
  }, []);
  return (
    <div>
      <TableHead />
      {tableStore.data?.map((row) => (
        <TableRow row={row} />
      ))}
    </div>
  );
};

export default observer(Table);
