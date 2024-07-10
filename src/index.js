import express from 'express';

import studentRouter from './routes/student.routes.js';
import programRouter from './routes/program.routes.js';
import subjectRouter from './routes/subject.routes.js';

const app = express();

app.use(express.json());

app.use('/api',studentRouter);
app.use('/api',programRouter);
app.use('/api',subjectRouter);

app.listen(3000);
console.log('Server running on port 3000');