import express from 'express';
import Article from '../models/article.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const articles = await Article.query();
  res.json(articles);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const article = await Article.query().findById(id);

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
})

export default router;