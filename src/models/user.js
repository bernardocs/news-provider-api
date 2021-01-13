import { Model } from 'objection';
import knex from '../db/knex.js';

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

export default User;
