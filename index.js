const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

// Use Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wellcome to Dear grocery server");
});

app.listen(port, () => {
  console.log(`Dear grocery on ${port} port`);
});
