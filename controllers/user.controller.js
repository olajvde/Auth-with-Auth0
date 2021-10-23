const { log } = require("../services/logger");

let userProfile = (req, res) => {
  const user = req.oidc.user;
  // returns the authenticated user's details
  res.render("profile", { user });
};

module.exports = { userProfile };
