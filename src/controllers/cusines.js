const {findCusines} = require('../models/queries');

module.exports = (req, res) => {
    findCusines(req.url.split('/')[1])
    .then(cusine => {
      res.render('cusine', {cusine, name:cusine[0].cuisine})
    }

    )
    .catch(err => console.log(err))
}
