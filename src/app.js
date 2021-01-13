import express from 'express';
import session from 'express-session';

import auth from './auth/index.js';

import publicAPI from './api/public/index.js';
import adminAPI from './api/admin/index.js';

const app = express();

// Accepts Content-type: application/json
app.use(express.json());

app.use(session({
  secret: 'el secreto secreto',
  resave: false,
  saveUninitialized: false
}));

// Initialize passport
app.use(auth.initialize());
app.use(auth.session());


app.use('/', publicAPI);
app.post('/login', auth.loginMiddleware);
app.use('/admin', auth.authenticate('jwt'), adminAPI);

const port = process.env.PORT || '3000';

app.listen({ port }, () => {
  console.log(`Listening on port ${port} :)`);
});
