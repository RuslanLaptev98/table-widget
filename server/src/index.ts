import express, { Request, Response } from 'express';
import pool from './db';
import QueryObj from '../types/QueryObj';
import generateWhereClause from '../utils/generateWhereClause';

const app = express();

app.use(express.json());

app.get('/', async (req: Request<{}, {}, {}, QueryObj>, res: Response) => {
  try {
    const whereClause = generateWhereClause(req.query);
    const data = await pool.query(`SELECT * FROM data ${whereClause}`);
    res.send(data.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(4000, () => {
  console.log('server started');
});
