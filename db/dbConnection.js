const mongoose = require("mongoose");

// Connection With DB
const dbConnection = () => {
  mongoose.connect(process.env.DB_URL).then((conn) => {
    console.log(`Database Connected ${conn}`);
  });
};

module.exports = dbConnection;
