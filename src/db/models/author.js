import { Model } from 'objection';
import knex from '../knex.js';

Model.knex(knex);

class Author extends Model {
  static get tableName() {
    return 'authors';
  }
}

export default Author;
