import usersDAO from '../../db/dao/users.js';
import { hash } from '../../auth/hash.js';

export default async (req, res) => {
  const { username, password, profile } = req.body;

  if (!username || !password) {
    return res.status(400).send('Required fields `username` and `password` must be provided.');
  }

  if (profile && profile === 'admin' && (!req.isAuthenticated() || req.user.profile !== 'admin')) {
    return res.status(401).send("You do not have permission to create a admin user");
  }

  const newUser = {
    username,
    profile,
    hash: hash(String(password))
  };

  try {
    await usersDAO.insertUser(newUser);
    return res.sendStatus(200);
  } catch (err) {
    if (err instanceof objection.ValidationError) {
      console.error(err.data);
      return res.status(400).send(err.data);
    }

    if (err instanceof objection.ConstraintViolationError) {
      console.error(err);
      return res.status(400).send(err.message);
    }

    res.sendStatus(500);
  }
}
