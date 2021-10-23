const mongoose = require("mongoose");
const { log } = require("../services/logger");

const db = mongoose.connection;
async function connect() {
  await mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true });

  db.on("error", () => console.error(error));
  db.once("open", () => console.log("Database connected"));
}

module.exports = connect;
