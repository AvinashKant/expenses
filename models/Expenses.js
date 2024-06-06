const mongoose = require("mongoose");
const schema = mongoose.Schema({
   title: String,
   description: String,
    amount: Number,
    date: Date,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("expenses", schema);
