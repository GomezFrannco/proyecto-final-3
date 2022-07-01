const { log } = require('../../src/utils/logs.utils.js')

class Access {
  constructor(Schema) {
    this.schema = Schema;
  }

  async create(Obj) {
    const date = new Date();
    try {
      Obj.timestamp = `[${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
      const res = await this.schema.create(Obj);
      return {
        message: "Successfully saved",
      };
    } catch (error) {
      log.console(error.message);
      log.file(error.message);
    }
  }

  async readAll(filter) {
    try {
      const res = await this.schema.find(filter);
      return await res;
    } catch (error) {
      log.console(error.message);
      log.file(error.message);
    }
  }

  async readOne(filter) {
    try {
      const res = await this.schema.findOne(filter);
      return await res;
    } catch (error) {
      log.console(error.message);
      log.file(error.message);
    }
  }

  async updateMany() {
    try {
      const res = await this.schema.updateMany();
      return {
        message: "Successfully updated",
      };
    } catch (error) {
      log.console(error.message);
      log.file(error.message);
    }
  }
  async updateOne(filter, update) {
    try {
      const res = await this.schema.updateOne(filter, update);
      return {
        message: "Successfully updated",
      };
    } catch (error) {
      log.console(error.message);
      log.file(error.message);
    }
  }

  async deleteMany(filter) {
    try {
      const res = await this.schema.deleteMany(filter);
      return {
        message: "Successfully deleted",
      };
    } catch (error) {
      log.console(error.message);
      log.file(error.message);
    }
  }
  async deleteOne(filter) {
    try {
      const res = await this.schema.deleteOne(filter);
      return {
        message: "Successfully deleted",
      };
    } catch (error) {
      log.console(error.message);
      log.file(error.message);
    }
  }
}

module.exports = {
  Access,
};
