
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.get("/api/students", (req, res) => {
  res.json([
    { id: 1, name: "Afreen" },
    { id: 2, name: "Rahul" }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});