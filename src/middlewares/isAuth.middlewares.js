function checkAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.redirect("/noAuth");
}

module.exports = {
  checkAuth,
};
