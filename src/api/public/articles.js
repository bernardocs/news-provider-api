import express from 'express';
import articlesDAO from '../../db/dao/articles.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { category } = req.query;

  const articles = await articlesDAO.getArticles({
    fields: ['category', 'title', 'summary'],
    category
  });

  res.json(articles);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const fields = ['category', 'title', 'summary', 'firstParagraph'];

  if (req.isAuthenticated()) {
    fields.push('body');
  }

  const article = await articlesDAO.getArticleById(id, { fields });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});


export default router;