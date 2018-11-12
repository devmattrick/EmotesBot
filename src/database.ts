import * as knex from 'knex';

// Initialize database based off of .env parameters
export default knex({
  client: process.env.DATABASE_DRIVER,
  debug: process.env.DATABASE_DEBUG === 'true',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA,
    filename: process.env.DATABASE_FILE,
    socketPath: process.env.DATABASE_SOCKET
  },
  useNullAsDefault: true
});
