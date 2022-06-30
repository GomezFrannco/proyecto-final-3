const log4js = require("../config/logs.config.js");

const console = log4js.getLogger();
const file = log4js.getLogger("fileLog");

module.exports = {
  log: {
    console: console,
    file: file,
  },
};
