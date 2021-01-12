import { Model } from 'objection';
import knex from '../db/knex.js';

Model.knex(knex);

class Author extends Model {
  static get tableName() {
    return 'authors';
  }
}

export default Author;
