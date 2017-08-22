const cusines = require('./../models/queries');

exports.get = (req, res) => {
  res.render('cusines', {cusines});
};
