import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';

import auth from './auth/index.js';

import publicAPI from './api/public/index.js';
import adminAPI from './api/admin/index.js';

dotenv.config();

const app = express();

// Accepts Content-type: application/json
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Initialize passport
app.use(auth.initialize());
app.use(auth.session());

app.use('/api/', publicAPI);
app.use('/api/admin', auth.authenticate('jwt'), adminAPI);

const port = process.env.PORT || '3000';

app.listen({ port }, () => {
  console.log(`Listening on port ${port} :)`);
});
