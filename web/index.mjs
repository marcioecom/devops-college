import "dotenv/config"
import express from "express"
import { Pool } from "pg"
import { createClient } from "redis"

const app = express();
const port = 3000;

const pgPool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`
});

redisClient.connect().catch(console.error);

app.get('/', (_req, res) => {
  res.send('Hello from Docker Compose app!');
});

app.get('/cache', async (_req, res) => {
  const cacheKey = 'message';

  const cached = await redisClient.get(cacheKey);
  if (cached) {
    return res.send(`From Redis: ${cached}`);
  }

  const result = await pgPool.query('SELECT NOW()');
  const message = `DB Time: ${result.rows[0].now}`;
  await redisClient.set(cacheKey, message);

  res.send(`From Postgres: ${message}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

