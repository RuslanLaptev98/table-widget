import Query from '../../types/Query';
import Row from '../../types/Row';
import generateQueryString from '../../utils/generateQueryString';

class TableStoreService {
  fetchData(query?: Query): Promise<Row[]> {
    const queryString = generateQueryString(query);

    return fetch(queryString)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  }
}

export default new TableStoreService();
