const { findCusinesById } = require('../models/queries');

module.exports = (req, res) => {
  //write a query to check if it is correct, if not send 404
  findCusinesById(req.params.id)
    .then(recipe => {
      if (recipe.length !== 0)
        res.render('recipe', {
          recipe: recipe[0]
        });
      else {
        res.render('error', {
          layout: 'error',
          statusCode: 404,
          errorMessage: 'not such page error'
        })
      }
    })
    .catch(err => res.render('error', {
      layout: 'error',
      statusCode: 500,
      errorMessage: 'server error'
    }));
}
