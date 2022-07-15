import { makeAutoObservable } from 'mobx';
import Query from '../../types/Query';
import Row from '../../types/Row';
import tableStoreService from './tableStore.service';

class TableStore {
  data: Row[] = [];

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
