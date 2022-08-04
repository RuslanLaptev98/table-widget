import Query from '../types/Query';

const generateWhereClause = (obj: Query): string => {
  if (Object.keys(obj).length === 0) return 'WHERE LIMIT 10';

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

  return `WHERE ${column} ${sqlCondition} LIMIT 10 OFFSET ${(
    (obj.page - 1) *
    10
  ).toString()}`;
};

export default generateWhereClause;
