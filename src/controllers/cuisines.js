const {findCuisines} = require('../models/queries');

module.exports = (req, res) => {
    findCuisines(req.url.split('/')[1])
    .then(cuisine => {
      res.render('cuisine', {cuisine, name:cuisine[0].cuisine})
    })
    .catch(err => {
      res.render('error', {
        layout: 'error',
        statusCode: 404,
        errorMessage: 'not such page error'
      })
    })
}
