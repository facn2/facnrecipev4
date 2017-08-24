const {sign, verify} = require('jsonwebtoken');

const setToken = (req, res, userId, username) => {
  const userDetails = {
    is_loggedin: true,
    user_id: userId,
    username: username
  }
  const jwtCookie = sign(userDetails, process.env.SECRET);
  res.writeHead(302, {
    'location': '/',
    'Set-cookie': `session_id=${jwtCookie}; max-age=6000; httpOnly;`
  });
  res.end();
};

const checkCookie = (req, res, next) => {
  let token;
  let login;
  const { session_id } = req.cookies;
  if (session_id) {
    try {
      token = verify(session_id, process.env.SECRET);
    } catch (err) {
      res.render('notloggedin') //render
    }
    next();
  } else res.render('notloggedin')
}

module.exports = {
  setToken,
  checkCookie
}
