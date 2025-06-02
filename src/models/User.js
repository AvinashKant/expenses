const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    daily_expenses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "daily_expenses"
     },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("users", schema);
