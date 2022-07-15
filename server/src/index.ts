import express, { Request, Response } from 'express';
import pool from './db';
import Query from '../types/Query';
import generateWhereClause from '../utils/generateWhereClause';

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get('/', async (req: Request<{}, {}, {}, Query>, res: Response) => {
  try {
    const whereClause = generateWhereClause(req.query);
    const data = await pool.query(`SELECT * FROM data ${whereClause}`);
    res.json(data.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log('server started');
});
