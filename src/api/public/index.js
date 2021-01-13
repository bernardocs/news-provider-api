import express from 'express';

import articlesAPI from './articles.js';

const router = express.Router();

router.use('/articles', articlesAPI);

export default router;