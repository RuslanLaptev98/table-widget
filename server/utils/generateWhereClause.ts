import QueryObj from '../types/QueryObj';

const generateWhereClause = (obj: QueryObj): string => {
  if (Object.keys(obj).length === 0) return '';

  const { column, condition, value } = obj;

  let sqlCondition = '';
  switch (condition) {
    case 'contains':
      if (column === 'title') {
        sqlCondition = `ilike '%${value}%'`;
      } else {
        sqlCondition = `::text ilike '%${value}%'`;
      }
      break;
    case 'equals':
      if (column === 'title') {
        sqlCondition = `ilike ${value}`;
      } else {
        sqlCondition = `= ${value}`;
      }
      break;
    case 'greater':
      sqlCondition = `> ${value}`;
      break;
    case 'less':
      sqlCondition = `< ${value}`;
      break;
  }

  return `WHERE ${column} ${sqlCondition}`;
};

export default generateWhereClause;
