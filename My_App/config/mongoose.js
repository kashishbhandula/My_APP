const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/My_App_Development');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecing to MongoDB"));
db.once('open',function(){
    console.log('Connection to Databaase :: MongoDB');
});
module.exports=db;