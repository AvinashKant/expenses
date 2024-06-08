const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './.env' });
const app = express();
const categories = require("./routes/category");
const dailyExpenses = require("./routes/dailyexpenses");

const dbConfig = require('./config/database.config.js');

app.use(cors({ origin: '*' }));


// Connect to MongoDB database
mongoose.connect(dbConfig.url, { useNewUrlParser: true }).then(() => {
   // For parsing application/json
   app.use(express.json());

   // For parsing application/x-www-form-urlencoded
   app.use(express.urlencoded({ extended: true }));
   app.use("/api", categories);
   app.use("/api", dailyExpenses);

   app.listen(5000, () => {
      console.log("Server has started!");
   });
});