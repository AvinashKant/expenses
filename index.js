const express = require("express");
const mongoose = require("mongoose");
const app = express();
const categories = require("./routes/category");
const dailyExpenses = require("./routes/dailyexpenses");

const dbConfig = require('./config/database.config.js');




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