const mongoose = require("mongoose");
require("dotenv").config();
// const mongoURI = 'your-mongodb-atlas-connection-string';
// const connection = mongoose.connect(process.env.mongoUrl);
mongoose.connect('mongodb+srv://pazhani:b19gaYctsqU7FsXC@cluster0.hvjizqz.mongodb.net/?retryWrites=true&w=majority');
const conn = mongoose.connection;
conn.on("error", (err) => {
  console.error("", err);
});

conn.once("open", function () {
  console.log("Connection Successful!");
});

module.exports = mongoose.connection;

// b19gaYctsqU7FsXC