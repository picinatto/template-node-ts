import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Server running, get route' });
});

app.listen(3333);