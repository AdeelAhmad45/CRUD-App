require('dotenv').config();
const express = require("express");

const cors = require("cors")
const connectToDb = require('./config/db');


const app = express();


// Express Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())






// init connection to db
connectToDb()

const userRoutes = require('./routes/useRoute.js')

app.use('/', userRoutes);


// export default app;

module.exports = app;