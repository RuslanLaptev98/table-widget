import Query from '../types/Query';

const generateQueryString = (query: Query | undefined): string => {
  if (query === undefined) return `${process.env.REACT_APP_SERVER_URL}`;

  return `${process.env.REACT_APP_SERVER_URL}/?column=${query.column}&condition=${query.condition}&value=${query.value}&page=${query.page}`;
};

export default generateQueryString;
