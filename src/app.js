const express = require("express");
const session = require("express-session");
const { options } = require("./config/session.config.js");
const accessRoutes = require("./routes/access.routes.js");
const mainRoutes = require("./routes/main.routes.js");
const apiRoutes = require("../API/routes/api.routes.js");
const passport = require("passport");

class App {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", this.port);
    this.app.set("views", "./src/views");
    this.app.set("view engine", "ejs");
  }
  middlewares() {
    this.app.use(passport.initialize());
    this.app.use(session(options));
    this.app.use(passport.session());
    this.app.use(express.static(__dirname + "/public"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use("/", accessRoutes);
    this.app.use("/", mainRoutes);
    this.app.use("/api", apiRoutes);
  }
  listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log("🚀 listening on port:", Number(this.app.get("port")));
    });
  }
}

module.exports = {
  App,
};
