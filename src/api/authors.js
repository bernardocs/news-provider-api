import express from 'express';
import Author from '../models/author.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await Author.query();
  res.json(authors);
})

export default router;