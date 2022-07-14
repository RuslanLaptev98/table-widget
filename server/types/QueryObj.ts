export default interface QueryObj {
  column: 'title' | 'quantity' | 'distance';
  condition: 'greater' | 'less' | 'equals' | 'contains';
  value: string;
}
