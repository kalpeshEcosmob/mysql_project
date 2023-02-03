const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.get("/getData", async (req, res, next) => {
  try {
    res.json("Working")
  } catch (error) {}
});

app.post("/postData", async (req, res, next) => {
  try {
  } catch (error) {}
});

app.use((error, req, res, next) => {
  res
    .status(500)
    .json({ Error: "Invalid Request", message: "Please check your url" });
});

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
