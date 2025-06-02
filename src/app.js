
const express = require("express");

const cors = require('cors');
const categories = require("./routes/category.js");
const dailyExpenses = require("./routes/dailyexpenses.js");
const errorHandler = require('./middlewares/errorHandler.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));
app.use(errorHandler);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON:', err.message);
        return res.status(400).json({ message: 'Invalid JSON payload' });
    }
    next(err);
});


app.use("/api", categories);
app.use("/api", dailyExpenses);
//app.use("/api", test);













module.exports = app;