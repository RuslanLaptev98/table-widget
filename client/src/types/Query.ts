export default interface Query {
  column: 'title' | 'quantity' | 'distance';
  condition: 'greater' | 'less' | 'equals' | 'contains';
  value: string;
}
