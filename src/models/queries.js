const db = require('../../database/dbConnection');
const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const checkPw = (password, hashedPw) => {
  return bcrypt.compare(password, hashedPw);
};

const findCuisines = cuisine => {
  const fetchdbCusines = 'SELECT recipe.id, recipe.title, recipe.difficulty, recipe.duration, recipe.ingredients, recipe.procedure, recipe.cuisine, users.username AS author FROM recipe JOIN users ON recipe.author_id = users.id WHERE recipe.cuisine = $1';
  //take the cusines from that country
  return db.query(fetchdbCusines, [cuisine]);
};

const findCusinesById = id => {
  const fetchdbCusines = 'SELECT recipe.id, recipe.title, recipe.difficulty, recipe.duration, recipe.ingredients, recipe.procedure, recipe.cuisine, users.username AS author FROM recipe JOIN users ON recipe.author_id = users.id WHERE recipe.id = $1';
  //take the cusines by id
  return db.query(fetchdbCusines, [id]);
};

const findLatest = () => {
  const fetchdbLatest = 'SELECT recipe.id, recipe.title, recipe.difficulty, recipe.duration, recipe.ingredients, recipe.procedure, recipe.cuisine, users.username AS author FROM recipe JOIN users ON recipe.author_id = users.id ORDER BY recipe.id DESC LIMIT 5';
  //take the latest recipes added
  return db.query(fetchdbLatest);
};

const signin = (username) => {
  const fetchdbPassword = 'SELECT id, password FROM users WHERE username = $1';
  //query to see if password exists
  return db.query(fetchdbPassword, [username]);
};

const newUser = (input, hashedPw) => {
  const insertUser = 'INSERT INTO users ( username, password, name, surname, email) VALUES ($1,$2, $3, $4, $5)';
  const {username, name, surname, email} = input;
  db.query(insertUser, [username, hashedPw, name, surname, email]);
};

const newRecipe = (newrecipe) => {
  const addNewRecipe = 'INSERT INTO recipe (title, difficulty, duration, ingredients, procedure, cuisine) VALUES ($1, $2, $3, $4, $5, $6)';
  const {title, difficulty, duration, ingredients, directions, cuisine} = newrecipe;
  return db.query(addNewRecipe, [title, difficulty, duration, ingredients, directions, cuisine]);
};

module.exports = {
  findCuisines,
  findCusinesById,
  hashPassword,
  signin,
  newUser,
  newRecipe,
  checkPw,
  findLatest
}
