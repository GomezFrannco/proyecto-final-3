const { App } = require("./src/app.js");
require("./src/config/dotenv.config.js");

function main(port) {
  const app = new App(port);
  return app.listen();
}

main(process.env.PORT);
