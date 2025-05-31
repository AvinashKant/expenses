const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './.env' });
const app = express();
const categories = require("./routes/category.js");
const dailyExpenses = require("./routes/dailyexpenses.js");
const test = require("./routes/test.js");

const dbConfig = require('./config/database.config.js');

app.use(cors({ origin: '*' }));

app.use((req, res, next) => {
   const origin = req.headers.origin;
   const referer = req.headers.referer;

   console.log('Origin:', origin);
   console.log('Referer:', referer);

   // Use the Origin header for cross-origin checks if needed
   if (origin === 'http://localhost:5173') {
      // Allow the request
      next();
   } else if (!origin && req.headers.host) {
      // Same-origin request (Origin header might be missing)
      next();
   } else {
      res.status(403).json({ error: 'Origin not allowed' });
   }
});


// Connect to MongoDB database
mongoose.connect(dbConfig.url, { useNewUrlParser: true }).then(() => {
   // For parsing application/json
   app.use(express.json());

   // For parsing application/x-www-form-urlencoded
   app.use(express.urlencoded({ extended: true }));
   app.use("/api", categories);
   app.use("/api", dailyExpenses);
   app.use("/api", test);

   app.listen(5000, () => {
      console.log("Server has started!");
   });
});