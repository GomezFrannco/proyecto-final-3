const log4js = require("log4js");

log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { type: "file", filename: "./logs/info.log" },
  },
  categories: {
    default: { appenders: ["console"], level: "info" },
    fileLog: { appenders: ["file"], level: "info" },
  },
});

module.exports = log4js;
