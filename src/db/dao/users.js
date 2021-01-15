import User from '../models/user.js';

export function getUserById(id, opts = {}) {
  if (opts.omitHash) {
    return User.query().select('id', 'username', 'profile').findById(id);
  }

  return User.query().findById(id);
}

export function getUserByUsername(username, opts = {}) {
  if (opts.omitHash) {
    return User
      .query()
      .select('id', 'username', 'profile')
      .where({ username })
      .first();
  }

  return User.query().where({ username }).first();
}

export function insertUser(user) {
  return User.query().insert(user);
}

export default {
  getUserById,
  getUserByUsername,
  insertUser
};
