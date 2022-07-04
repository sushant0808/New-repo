const express = require("express");
const mongoose = require("mongoose");
import clientRoute from "./routes/client.route";
const app = express();

app.use(express.json());
app.use("/client", clientRoute);

mongoose
  .connect("mongodb://localhost:27017/clients")
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Not connected");
  });

const PORT = 8000;
app.listen(PORT);
