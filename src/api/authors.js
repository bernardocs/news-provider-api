import express from 'express';
import authorsDAO from '../db/dao/authors.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await authorsDAO.getAuthors();
  res.json(authors);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await authorsDAO.getAuthorById(id);

  if (author) {
    res.json(author);
  } else {
    res.sendStatus(404);
  }
})

export default router;