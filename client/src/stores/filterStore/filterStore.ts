import { makeAutoObservable } from 'mobx';
import Column from '../../types/Column';
import Condition from '../../types/Condition';

class FilterStore {
  column: Column = 'title';
  condition: Condition = 'contains';
  value: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (val: string) => {
    this.value = val;
  };

  setColumn = (val: Column) => {
    this.column = val;
  };

  setCondition = (val: Condition) => {
    this.condition = val;
  };
}

export default new FilterStore();
