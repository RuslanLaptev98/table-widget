import Query from '../../types/Query';
import Row from '../../types/Row';
import generateQueryString from '../../utils/generateQueryString';

class TableStoreService {
  fetchData(query?: Query): Promise<Row[]> {
    const queryString = generateQueryString(query);

    return fetch(queryString)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.log(error));
  }
}

export default new TableStoreService();
