import { Model } from 'objection';
import Author from './author.js';

import knex from '../db/knex.js';

Model.knex(knex);

class Article extends Model {
  static get tableName() {
    return 'articles';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.HasOneRelation,
        modelClass: Author,
        join: {
          from: 'articles.author_id',
          to: 'authors.id'
        }
      }
    }
  }
}

export default Article;
