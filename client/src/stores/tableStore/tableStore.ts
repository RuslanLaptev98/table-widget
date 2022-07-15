import { makeAutoObservable } from 'mobx';
import Query from '../../types/Query';
import Row from '../../types/Row';
import tableStoreService from './tableStore.service';

class TableStore {
  data: Row[] = [
    {
      date: 'Feb 17, 2023',
      title: 'Hyundai Motors LLC',
      quantity: '18',
      distance: '29',
    },
    {
      date: 'Aug 20, 2024',
      title: 'Samsung Bluewings FC',
      quantity: '70',
      distance: '10',
    },
    {
      date: 'Sep 19, 2024',
      title: 'K-Dreamer',
      quantity: '14',
      distance: '30',
    },
    {
      date: 'Sep 10, 2025',
      title: 'RL Tech',
      quantity: '15',
      distance: '31',
    },
    {
      date: 'Sep 11, 2023',
      title: 'Labro Labs',
      quantity: '16',
      distance: '32',
    },
    {
      date: 'Feb 17, 2023',
      title: 'Incheon United',
      quantity: '18',
      distance: '29',
    },
    {
      date: 'Aug 20, 2024',
      title: 'SeoulE',
      quantity: '70',
      distance: '10',
    },
    {
      date: 'Sep 19, 2024',
      title: 'Vita Contemplativa',
      quantity: '14',
      distance: '30',
    },
    {
      date: 'Sep 10, 2025',
      title: 'RL Bitcoin',
      quantity: '15',
      distance: '31',
    },
    {
      date: 'Sep 11, 2023',
      title: 'Labro Market',
      quantity: '16',
      distance: '32',
    },
    {
      date: 'Feb 17, 2023',
      title: 'Sangju Sangmu',
      quantity: '18',
      distance: '29',
    },
    {
      date: 'Aug 20, 2024',
      title: 'Jeju',
      quantity: '70',
      distance: '10',
    },
    {
      date: 'Sep 19, 2024',
      title: 'Pohang Steelers',
      quantity: '14',
      distance: '30',
    },
    {
      date: 'Sep 10, 2025',
      title: 'Daegu',
      quantity: '15',
      distance: '31',
    },
    {
      date: 'Sep 11, 2023',
      title: 'Gangwon',
      quantity: '16',
      distance: '32',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setData(value: Row[]) {
    this.data = value;
  }

  fetchData(query?: Query) {
    tableStoreService.fetchData(query).then((data) => this.setData(data));
  }
}

export default new TableStore();
