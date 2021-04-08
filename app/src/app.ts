import express from 'express';
import path from 'path';
import { router as personRouter } from './routes/person';

const app = express();

app.use('/persons', personRouter);

export { app };
