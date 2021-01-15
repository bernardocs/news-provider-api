import Author from '../models/author.js';

export function getAuthors() {
  return Author.query();
}

export function getAuthorById(id) {
  return Author.query().findById(id);
}

export function insertAuthor(author) {
  return Author.query().insert(author);
}

export function deleteAuthorById(id) {
  return Author.query().deleteById(id);
}

export default {
  getAuthors,
  getAuthorById,
  insertAuthor,
  deleteAuthorById
}