import express from 'express';

import studentRouter from './routes/student.routes.js';

const app = express();

app.use(express.json());

app.use('/api',studentRouter);

app.listen(3000);
console.log('Server running on port 3000');