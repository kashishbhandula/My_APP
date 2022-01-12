const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const db = require('./config/mongoose.js');
const userSchema = require('./models/user.js');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const path = require('path');



const port = 3000;
const app = express();

app.set('layout extraStyles', true);
app.set('layout extraScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(expresslayouts);
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log(`Server is not listening :${port}`);
    }
    console.log(`Server is listening on port:${port}`);
    //console.log(__dirname);

});
