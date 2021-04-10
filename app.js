const express = require('express');
const path = require('path');
// const moment = require('moment');
// const log = require('./log'); 

const app = express();

const PORT = process.env.PORT || 5000;  //set port server
app.listen(PORT,() => console.log(`running on port ${PORT}`));

// set static folder
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// app.use(log);
app.use('/api/users',require('./router/api/users'));