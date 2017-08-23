const {hashPassword, newUser} = require('../models/queries');

module.exports = (req, res) => {
  console.log(req.body);
  hashPassword(req.body.password)
  .then(hashedPw => newUser(req.body, hashedPw))
  .then(res.redirect('/'))
  .catch(err => console.log(err))
}
