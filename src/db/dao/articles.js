import Article from '../../models/article.js';

export function getArticles() {
  return Article.query().withGraphFetched('author');
}

export function getArticleById(id) {
  return Article.query().findById(id).withGraphFetched('author');
}

export default {
  getArticles,
  getArticleById
};
