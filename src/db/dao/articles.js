import Article from '../../models/article.js';

export function getArticles({ fields = [] } = {}) {
  return Article
    .query()
    .select(...fields)
    .withGraphFetched('author');
}

export function getArticleById(id, { fields = [] } = {}) {
  return Article
    .query()
    .select(...fields)
    .findById(id)
    .withGraphFetched('author');
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
