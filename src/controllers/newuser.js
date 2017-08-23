const {hashPassword} = require('../models/queries');

module.exports = (req, res) => {
  console.log(req.body);
  hashPassword(req.body.password)
  .then(hashedPw => {newUser(req.body, hashedPw)})
}
