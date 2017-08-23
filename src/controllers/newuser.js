module.exports = (req, res) => {
  console.log(req.body);
  newUser(req.body)
}
