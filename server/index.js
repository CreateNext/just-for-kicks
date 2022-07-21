const express = require("express");
require("dotenv").config();

const dbConnect = require("./db");

const port = process.env.PORT || 7070;
const app = express();

dbConnect();

// Initialize Express middleware
app.use(express.json({ extended: false }));

// Create a basic express route
app.get("/", (req, res) => res.json({ message: "Welcome to JustForKicks!" }));

app.listen(port, () => {
  console.log(`server listening on port: ${port} 🚀`);
});
