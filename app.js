const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')


const app = express();
const dotenv = require('dotenv');

dotenv.config()

//import routers
const authRoute = require('./routes/auth');

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    () => {
        console.log("berhasil connect ke database!");
    });


// Midleware
app.use(bodyParser.json())

//Route middleware
app.use('/api/user', authRoute)

app.listen(3000, () => {
    console.log('berjalan di port 3000');
})