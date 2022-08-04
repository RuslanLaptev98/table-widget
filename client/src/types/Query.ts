import Column from './Column';
import Condition from './Condition';

export default interface Query {
  column: Column;
  condition: Condition;
  value: string;
  page: number;
}
