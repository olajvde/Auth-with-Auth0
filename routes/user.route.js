const router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");

const { userProfile } = require("../controllers/user.controller");

router.get("/", requiresAuth(), userProfile);

module.exports = router;
