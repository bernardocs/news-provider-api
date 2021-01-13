import objection from 'objection';
import express from 'express';
import authorsDAO from '../../db/dao/authors.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await authorsDAO.getAuthors();
  res.json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const author = await authorsDAO.getAuthorById(id);

  if (author) {
    res.json(author);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  const author = req.body;

  try {
    await authorsDAO.insertAuthor(author);
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

  const deletedCount = await authorsDAO.deleteAuthorById(id);

  if (deletedCount) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

export default router;