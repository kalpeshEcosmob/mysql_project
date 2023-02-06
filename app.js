const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");
const mysql2 = require("mysql2");
const fs = require("fs");

const sql = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "Resume_",
});

const app = express();
app.use(CORS());
app.options("*", CORS());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "*");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/getData/:id", CORS(), async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const query = "select * from tbl_cv";
    const query1 = `SELECT * FROM tbl_cv where emp_id=${id}`;
    sql.query(query1, function (err, results) {
      if (!err) {
        // results = results.map(row => (row.package = JSON.parse(row.package), row));
        const newData = results;
        console.log("newdata ===>", newData[0].image);

        // const parsed = JSON.parse(newData);
        // console.log(typeof parsed);
        // console.log("parsed data", parsed);

        //...............to extract image data from uploads........//

        // const image = fs.readFileSync(`${newData[0].image}`);
        // res.status(200).json({ data: results, image: image });

        //..........................................................//

        res.status(200).json({ data: results });
      } else {
        console.log("Error in requesting data", err);
        res.status(400).json({ Error: err.message });
      }
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ Error: "Error" });
  }
});

app.post("/postData", CORS(), async (req, res, next) => {
  try {
    const { emp_id, emp_email, image, resume_data } = req.body;
    let buff = Buffer.from(image, "base64");
    const file_name = `uploads/${new Date().toISOString()}.png`;
    fs.writeFileSync(file_name, buff);
    return false;
    const data = JSON.stringify(resume_data);
    const query =
      "INSERT INTO tbl_cv(emp_id,emp_email,image,resume_data) VALUES ?";
    const value = [[emp_id, emp_email, file_name, data]];
    sql.query(query, [value], function (err, results) {
      if (!err) {
        res.status(200).json({
          status: `emp succesfully inserted`,
          data: results,
        });
        console.log(results);
      } else {
        //   res.status(400).json({ error: "Something failed!" });
        console.log("error", err);
        res.status(400).send(err.message);
      }
      // results = results.map(row => (row.package = JSON.parse(row.package), row));

      // aboutMe = JSON.parse(results[0]['about_me']);

      // console.log("aboutMe -----------", results);
      // res.json("Hello");
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.use((error, req, res, next) => {
  console.log("errorr==============================>", error);
  res
    .status(500)
    .json({ Error: "Invalid Request", message: "Please check your url" });
});

// app.listen(PORT, "172.16.16.147", () => {
//   console.log(`Running at port ${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
