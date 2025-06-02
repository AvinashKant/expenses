const mongoose = require("mongoose");
const schema = mongoose.Schema({
   title: String,
   daily_expenses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "daily_expenses"
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
   },
});

module.exports = mongoose.model("categories", schema);
