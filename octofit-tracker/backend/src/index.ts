import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = Number(process.env.PORT) || 8000;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`OctoFit backend listening on port ${PORT}`);
});

export default app;
