const pgp = require('pg-promise')();

const herokuDB = {
  host: process.env.HEROKU_HOST,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PW,
  database: process.env.HEROKU_DB,
  ssl: false,
};

const db = pgp(herokuDB);
module.exports = db;
