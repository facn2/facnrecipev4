const db = require('../../database/dbConnection')

const findCusines = cusine => {
  myQuery = `SELECT * FROM recipe WHERE cuisine = $1`;
  //take the cusines from that country
  console.log(cusine);
  return db.query(myQuery, [cusine]);
}

module.exports = {
  findCusines
}
