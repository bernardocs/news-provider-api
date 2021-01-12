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

router.post('/', async (req, res) => {
  const article = req.body;

  try {
    await articlesDAO.insertArticle(article);
    res.send(201);
  } catch (err) {
    if (err instanceof objection.ValidationError) {
      console.error(err.data);
      res.status(400).send(err.data);
    } else if (err instanceof objection.ConstraintViolationError) {
      console.error(err);
      res.status(400).send(err.message);
    } else {
      res.sendStatus(500);
    }
  }
});

export default router;