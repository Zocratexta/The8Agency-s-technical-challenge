const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:the8agency@attendees-cluster.5djim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose;
