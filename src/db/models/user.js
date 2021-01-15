import { Model } from 'objection';
import knex from '../knex.js';

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

export default User;
