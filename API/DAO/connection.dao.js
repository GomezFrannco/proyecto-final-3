const mongoose = require('mongoose');
const { log } = require('../../src/utils/logs.utils.js')
require('../../src/config/dotenv.config.js')

let instance = null;

class Connection {
  constructor () {
    this.db = mongoose
    this.url = process.env.MONGO_URI;
    this.status = false
  }
  async connect() {
    try {
      await this.db.connect(this.url);
      this.status = true;
      return log.console.info("💾 connected with MongoAtlas"), log.file.info("💾 connected with MongoAtlas");
    } catch (error) {
      return log.console.error(error.message), log.file.error(error.message);
    }
  }
  async disconnect() {
    try {
      await this.db.connection.close();
      this.status = false;
      return log.console.warn("❗disconnected from MongoAtlas"), log.file.warn("❗disconnected from MongoAtlas");
    } catch (error) {
      return log.console.error(error.message), log.file.error(error.message);
    }
  }
  static getInstance() {
    if (!instance) {
      instance = new Connection();
    }
    return instance;
  }
}

module.exports = Connection;