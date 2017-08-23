module.exports = (req, res) => {
  console.log(req.body);
  newRecipe(req.body)
}
