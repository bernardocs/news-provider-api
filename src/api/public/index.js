import express from 'express';

import articlesAPI from './articles.js';
import signUpMiddleware from './sign-up.js';

const router = express.Router();

router.use('/articles', articlesAPI);

router.use('/sign-up', signUpMiddleware);

export default router;