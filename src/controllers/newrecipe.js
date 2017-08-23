const {newRecipe} = require('../models/queries');

module.exports = (req, res) => {
  console.log('a: ', req.body);
  newRecipe(req.body)
  .then(res.redirect('/'))
  .catch(err => console.log(err))
}
