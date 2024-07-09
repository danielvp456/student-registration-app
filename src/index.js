import express from 'express';
import { pool } from './config/db.config.js';

const app = express();

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1+1');
    res.json(result[0]);
});

app.listen(3000);
console.log("listening...");