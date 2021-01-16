// See https://github.com/nodejs/help/issues/2907#issuecomment-757446568
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
      user: 'postgres',
      password: 'secret',
      database: 'development_db',
    },
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/development'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DB_CONN_STR,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
