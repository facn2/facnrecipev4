const {findCusines} = require('../models/queries');

module.exports = (req, res) => {
    findCusines(req.url.split('/')[1])
    .then(cusine => {
      cusine.unshift({name:req.url.split('/')[1]});
      res.render('cusine', {cusine})
    }

    )
    .catch(err => console.log(err))
}
