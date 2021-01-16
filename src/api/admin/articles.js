import objection from 'objection';
import express from 'express';
import articlesDAO from '../../db/dao/articles.js';

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
    return res.send(201);
  } catch (err) {
    if (err instanceof objection.ValidationError) {
      console.error(err.data);
      return res.status(400).send(err.data);
    }

    if (err instanceof objection.ConstraintViolationError) {
      console.error(err);
      return res.status(400).send(err.message);
    }

    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletedCount = await articlesDAO.deleteArticleById(id);

  if (deletedCount) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

export default router;