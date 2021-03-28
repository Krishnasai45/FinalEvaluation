const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoute");
const teachersData = require("./mockData");
const Students = require("./models/students");

const app = express();
const db = mongoose.connection;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/admin", adminRoutes);
console.log(process.env.URI);
mongoose.connect(
  process.env.URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (error) => {
    if (error) console.log(`error connecting database : ${error}`);
    else console.log("Database is successfully connected");
  }
);

db.once("open", async (req, res) => {
  if ((await Students.countDocuments().exec()) > 0) {
    console.log("Students Data already added in the collection");
    return;
  }

  Students.insertMany(teachersData)
    .then(() => console.log("Students Data added Successfully"))
    .catch((err) => console.log(`Error : ${err}`));
});

app.listen(5000, () => {
  console.log(`server running on port 5000`);
});
