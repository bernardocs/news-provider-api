import bcrypt from 'bcryptjs';

const saltRounds = 9;

export function hash(password) {
  return bcrypt.hashSync(password, saltRounds);
}

export function compare(password, dbHash) {
  return bcrypt.compareSync(password, dbHash);
}

export default {
  hash,
  compare
}