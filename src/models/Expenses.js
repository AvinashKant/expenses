const mongoose = require("mongoose");
const schema = mongoose.Schema({
    description: String,
    amount: Number,
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    sub_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("daily_expenses", schema);
