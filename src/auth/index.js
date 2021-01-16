import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import hash from './hash.js';

import usersDAO from '../db/dao/users.js';

const params = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

passport.use(new JwtStrategy(params,
  ({ id }, done) => {
    usersDAO.getUserById(id, { omitHash: true }).then(user => {
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    })
    .catch(err => {
      done(err, false);
    });
  }));

// (de)serialize in session
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  usersDAO.getUserById(id, { omitHash: true }).then(user => {
    delete user.hash;
    cb(null, user);
  })
  .catch(err => {
    cb(err);
  });
});

export function initialize() {
  return passport.initialize();
}

export function session() {
  return passport.session();
}

export function authenticate(...params) {
  return passport.authenticate(...params);
}

export async function loginMiddleware(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Required fields `username` and `password` must be provided.');
  }

  try {
    const user = await usersDAO.getUserByUsername(username);

    if (!hash.compare(password, user.hash)) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '6h' });

    res.json({ token: token });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default {
  initialize,
  session,
  authenticate,
  loginMiddleware
};
