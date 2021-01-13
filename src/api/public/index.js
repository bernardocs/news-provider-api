import express from 'express';

import articlesAPI from './articles.js';
import { loginMiddleware } from '../../auth/index.js';
import signUpMiddleware from './sign-up.js';

const router = express.Router();

router.use('/articles', articlesAPI);

router.post('/login', loginMiddleware);
router.post('/sign-up', signUpMiddleware);

export default router;