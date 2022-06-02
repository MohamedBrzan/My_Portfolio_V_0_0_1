const mongoose = require('mongoose');

const DB = () =>
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) =>
      console.log(`Connected to ${connection.connection.name}`)
    )
    .catch((error) => console.log(error.message));

module.exports = DB;
