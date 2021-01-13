import Article from '../../models/article.js';

export function getArticles() {
  return Article.query().withGraphFetched('author');
}

export function getArticleById(id) {
  return Article.query().findById(id).withGraphFetched('author');
}

export function insertArticle(article) {
  return Article.query().insert(article);
}

export function deleteArticleById(id) {
  return Article.query().deleteById(id);
}

export default {
  getArticles,
  getArticleById,
  insertArticle,
  deleteArticleById
};
