const {signin, checkPw} = require('../models/queries');

module.exports = (req, res) => {
  signin(req.body.username)
  .then(hashedPw => {
    console.log(hashedPw);
    if (hashedPw.length !== 0) {
      return checkPw(req.body.password, hashedPw[0].password);
    }
    else throw new Error('No such user');
  })
  .then(trueorfalse => {
    if (trueorfalse) {
      res.send('The password is correct')
    }
    else throw new Error('Incorrect password')
  })
  .catch(err => res.send(err.message))
}
