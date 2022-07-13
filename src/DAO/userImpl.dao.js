const UserInterface = require("../interfaces/user.interfaces.js");
const { userModel } = require("../models/user.models.js");

class UserDAO extends UserInterface {
  constructor() {
    super();;
    this.db = userModel;
  }
  async addUser(newUser) {
    try {
      return await this.db.create(newUser);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  async getUser(filter) {
    try {
      return await this.db.findOne(filter);
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }
  async getAllUsers() {
    try {
      return await this.db.find();
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  async updateUser(filter, update) {
    try {
      return findOneAndUpdate(filter, update);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
}

module.exports = {
  User: new UserDAO(),
};
