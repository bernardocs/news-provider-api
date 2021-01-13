import express from 'express';

import authorsAPI from './authors.js';
import articlesAPI from './articles.js';

const router = express.Router();

router.use('/authors', authorsAPI);
router.use('/articles', articlesAPI);

export default router;