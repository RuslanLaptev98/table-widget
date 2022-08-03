import Query from '../types/Query';

const generateQueryString = (query: Query | undefined): string => {
  if (query === undefined) return 'http://localhost:4000/';

  return `http://localhost:4000/?column=${query.column}&condition=${query.condition}&value=${query.value}`;
};

export default generateQueryString;
