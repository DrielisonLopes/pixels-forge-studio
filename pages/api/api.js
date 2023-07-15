import express from 'express';

const app = express();

app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

export default app;
