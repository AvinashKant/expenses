const dotenv = require('dotenv');
const app = require("./src/app");
const { connectDB } = require('./src/databases/mongodb')

dotenv.config();

const PORT = process.env.PORT || 5000;
/**
 * test DB connections
 */
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});