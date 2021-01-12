import express from 'express';
import authorsAPI from './api/authors.js';
import articlesAPI from './api/articles.js';

const app = express();

app.use('/authors', authorsAPI);
app.use('/articles', articlesAPI);

const port = process.env.PORT || '3000';

app.listen({ port }, () => {
  console.log(`Listening on port ${port} :)`);
});
