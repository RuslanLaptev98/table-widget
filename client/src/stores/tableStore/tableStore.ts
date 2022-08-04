import { makeAutoObservable } from 'mobx';
import Query from '../../types/Query';
import Row from '../../types/Row';
import tableStoreService from './tableStore.service';

class TableStore {
  data: Row[] = [];
  page: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setData = (value: Row[]) => {
    this.data = value;
  };
  fetchData = (query?: Query) => {
    tableStoreService.fetchData(query).then((data) => this.setData(data));
  };

  nextPage = () => {
    this.page = this.page + 1;
  };
  prevPage = () => {
    this.page = this.page - 1;
  };
  firstPage = () => {
    this.page = 1;
  };
}

export default new TableStore();
