const {newRecipe} = require('../models/queries');

module.exports = (req, res) => {
  newRecipe(req.body)
  .then(res.redirect('/'))
  .catch(err => console.log(err))
}
