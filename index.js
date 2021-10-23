const express = require("express");
const app = express();
var path = require("path");
const { log } = require("./services/logger");
const connect = require("./loaders/startDB");
const { auth } = require("express-openid-connect");
require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  secret: process.env.SECRET,
};

app.use(auth(config));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

const userRouter = require("./routes/user.route");

app.use("/user", userRouter);

const port = process.env.PORT;

app.listen(port, async () => {
  await connect().then(() => log.info("connected to db"));
  log.info(`Application connected on port ${port}`);
});
