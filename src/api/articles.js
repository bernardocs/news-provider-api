import express from 'express';
import articlesDAO from '../db/dao/articles.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const articles = await articlesDAO.getArticles();
  res.json(articles);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const article = await articlesDAO.getArticleById(id);

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

export default router;