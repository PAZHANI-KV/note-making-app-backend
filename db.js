const mongoose = require("mongoose");
require("dotenv").config();
// const mongoURI = 'your-mongodb-atlas-connection-string';
// const connection = mongoose.connect(process.env.mongoUrl);
mongoose.connect("mongodb://Pazahani:Bluegreen@ac-ohcr8rq-shard-00-00.hyatial.mongodb.net:27017,ac-ohcr8rq-shard-00-01.hyatial.mongodb.net:27017,ac-ohcr8rq-shard-00-02.hyatial.mongodb.net:27017/noteapp?ssl=true&replicaSet=atlas-95uguv-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// module.exports = {
//   connection,
// };

module.exports = mongoose.connection;