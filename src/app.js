import express from 'express';
import authorsAPI from './api/authors.js';

const app = express();

app.use('/authors', authorsAPI);

const port = process.env.PORT || '3000';

app.listen({ port }, () => {
  console.log(`Listening on port ${port} :)`);
});
