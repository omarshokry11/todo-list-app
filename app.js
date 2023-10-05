const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const dbConnection = require("./db/dbConnection");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// db Connection
dbConnection();

// Middleware
app.use(express.json());

// Mount route
app.use(taskRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running in port: ${PORT}`);
});
