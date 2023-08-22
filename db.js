const mongoose = require("mongoose")
require("dotenv").config()
// const mongoURI = 'your-mongodb-atlas-connection-string';

mongoose.connect("mongodb+srv://pazhani:Bluegreen1!!!@cluster0.2awztuf.mongodb.net/noteapp?retryWrites=true&w=majority", {
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
//     connection,
// };

module.exports = mongoose.connection;