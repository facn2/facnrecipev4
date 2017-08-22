const {findCusines} = require('../models/queries');

module.exports = (req, res) => {
    findCusines(req.url.split('/')[1])
    .then(cusine => console.log(cusine))
    .catch(err => console.log(err))
}
