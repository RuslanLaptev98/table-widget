import Query from '../types/Query';

const generateQueryString = (query: Query | undefined): string => {
  if (query === undefined) return 'https://greve-livre-45456.herokuapp.com/';

  return `https://greve-livre-45456.herokuapp.com/?column=${query.column}&condition=${query.condition}&value=${query.value}`;
};

export default generateQueryString;
