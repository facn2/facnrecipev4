const {sign, verify} = require('jsonwebtoken')

const setToken = (req, res, userId, username) => {
  const userDetails = {
    is_loggedin: true,
    user_id: userId,
    username: username
  }
  const jwtCookie = sign(userDetails, process.env.SECRET);
  res.writeHead(302, {
    'location': '/',
    'Set-cookie': `jwt=${jwtCookie}; max-age=6000; httpOnly;`
  });
  res.end();
};

module.exports = {
  setToken
}
