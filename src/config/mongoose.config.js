const mongoose = require("mongoose");
const { log } = require("../utils/logs.utils.js");
require("./dotenv.config.js");

async function connect(url) {
  return await mongoose.connect(url, (err) => {
    if (!err) {
      log.console.info("💾 connected with Mongo");
      log.file.info("💾 connected with Mongo");
    } else {
      log.console.error(err.message);
      log.file.error(err.message);
    }
  });
}

connect(process.env.MONGO_URI);
