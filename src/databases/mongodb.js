
const { mongoDBUrl } = require('../config/database.config')
const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(mongoDBUrl)
        .then(() => console.log("Connection Successful"))
        .catch((err) => console.error("Connection Error:", err));

};
module.exports = { connectDB };