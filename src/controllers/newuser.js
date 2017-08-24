const {hashPassword, newUser} = require('../models/queries');

module.exports = (req, res) => {
  hashPassword(req.body.password)
  .then(hashedPw => {
    if (req.body.name.length < 3) throw new Error('Name is too short')
    else if (req.body.surname.length < 3) throw new Error('Surname is too short')
    else if (req.body.email.length < 3) throw new Error('Email is too short')
    else if (!req.body.email.match(/[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})/i)) throw new Error('Please enter a valid email.')
    else if (req.body.username.length < 6) throw new Error('Username is too short')
    else if (req.body.password.length < 8) throw new Error('Password is too short')
    else if (req.body.password !== req.body.confirm) throw new Error('Passwords don\'t match')
    else {
      newUser(req.body, hashedPw);
      res.redirect('/');
    }
  })
  .catch(err => res.send(err.message))
}
