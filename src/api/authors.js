import express from 'express';
import Author from '../models/author.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await Author.query();
  res.json(authors);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.query().findById(id);

  if (author) {
    res.json(author);
  } else {
    res.sendStatus(404);
  }
})

export default router;