import Author from '../../models/author.js';

export function getAuthors() {
  return Author.query();
}

export function getAuthorById(id) {
  return Author.query().findById(id);
}

export function insertAuthor(author) {
  return Author.query().insert(author);
}

export default {
  getAuthors,
  getAuthorById,
  insertAuthor
}