const db = require('../../database/dbConnection')
const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  return bcrypt.hash(password, 10)
};

const findCuisines = cuisine => {
  let myQuery = `SELECT recipe.id, recipe.title, recipe.difficulty, recipe.duration, recipe.ingredients, recipe.procedure, recipe.cuisine, users.username AS author FROM recipe JOIN users ON recipe.author_id = users.id WHERE recipe.cuisine = $1`;
  //take the cusines from that country
  return db.query(myQuery, [cuisine]);
}


const signin = (username) => {
  const fetchdbPassword = 'SELECT password FROM users WHERE username = $1';  //query to see if password exists
  return db.query(fetchdbPassword, [username])
}

const checkPw = (password, hashedPw) => {
  return bcrypt.compare(password, hashedPw);
}

const newUser = (input, hashedPw) => {
  let insertUser = "INSERT INTO users ( username, password, name, surname, email) VALUES ($1,$2, $3, $4, $5)";
  const {username, name, surname, email} = input;
  db.query(insertUser, [username, hashedPw, name, surname, email])
}

const newRecipe = (newrecipe) => {
  const addNewRecipe = `INSERT INTO recipe (title, difficulty, duration, ingredients, procedure, cuisine) VALUES ($1, $2, $3, $4);`;
  const {title, difficulty, duration, ingredients, directions, cuisine} = newRecipe
  db.query(addNewRecipe, [title, difficulty, duration, ingredients, directions, cusine])
}

module.exports = {
  findCuisines,
  signin,
  newUser,
  newRecipe,
  checkPw
}
