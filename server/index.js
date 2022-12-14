const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")

const app = express();
require("dotenv").config();

app.use(cors);
app.use(express.json());
app.use("/app/auth", userRoutes)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  })
  .catch(() => {
    console.log(err.massage);
  })

const server = app.listen(process.env.PORT, () => {
  console.log(`server start on port: ${process.env.PORT}`);
});
