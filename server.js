const express = require("express");
require("dotenv").config();
const todoRoutes = require("./routes/todo/todoRoutes");
const { connectDB } = require("./config/db_config");
const app = express();
const PORT = process.env.PORT || 8000;

// DB Connection

connectDB();

// Body-Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to CRUD API");
});

// TODO Routes
app.use("/api/todo", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
