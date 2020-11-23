const path = require('path')
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db');

const app = express();

connectDB()

// cors
app.use(cors());
// morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Port
const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`.magenta.bold));