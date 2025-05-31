
const { mongoDBUrl } = require('./../config/dbConfig')
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBUrl, { useNewUrlParser: true }).then(() => {
            console.log('mongoose Connected Successfully');
        });

    } catch (error) {
        console.error('Database Connection Error', error);
        process.exit(1);
    }
};

module.exports = { connectDB };