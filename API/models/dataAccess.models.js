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
      console.error({ message: error });
    }
  }

  async readAll(filter) {
    try {
      const res = await this.schema.find(filter);
      return await res;
    } catch (error) {
      console.error({ message: error });
    }
  }

  async readOne(filter) {
    try {
      const res = await this.schema.findOne(filter);
      return await res;
    } catch (error) {
      console.error({ message: error });
    }
  }

  async updateMany() {
    try {
      const res = await this.schema.updateMany();
      return {
        message: "Successfully updated",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
  async updateOne(filter, update) {
    try {
      const res = await this.schema.updateOne(filter, update);
      return {
        message: "Successfully updated",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }

  async deleteMany(filter) {
    try {
      const res = await this.schema.deleteMany(filter);
      return {
        message: "Successfully deleted",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
  async deleteOne(filter) {
    try {
      const res = await this.schema.deleteOne(filter);
      return {
        message: "Successfully deleted",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
}

module.exports = {
  Access,
};
