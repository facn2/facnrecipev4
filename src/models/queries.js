const db = require('../../database/dbConnection')

const findCusines = cusine => {
  myQuery = `SELECT recipe.id, recipe.title, recipe.difficulty, recipe.duration, recipe.ingredients, recipe.procedure, recipe.cuisine, users.username AS author FROM recipe JOIN users ON recipe.author_id = users.id WHERE recipe.cuisine = $1`;
  //take the cusines from that country
  return db.query(myQuery, [cusine]);
}

module.exports = {
  findCusines
}
