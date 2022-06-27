const mongoose = require("mongoose");
require('./dotenv.config.js')

async function connect(url) {
  return await mongoose.connect(url, (err) => {
    !err
      ? console.log({
          message: "Connected with MongoDB",
        })
      : console.error({
          message: err.message,
        });
  });
}

connect(process.env.MONGO_URI);
