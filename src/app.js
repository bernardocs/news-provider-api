import express from 'express';

import publicAPI from './api/public/index.js';
import adminAPI from './api/admin/index.js';

const app = express();

// Accepts Content-type: application/json
app.use(express.json());

app.use('/', publicAPI);
app.use('/admin', adminAPI);

const port = process.env.PORT || '3000';

app.listen({ port }, () => {
  console.log(`Listening on port ${port} :)`);
});
