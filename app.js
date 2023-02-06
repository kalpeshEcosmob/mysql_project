const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql2 = require("mysql2");

const pool = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: 'Resume_'
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.get("/getData", async (req, res, next) => {
  try {
    const query = "select * from tbl_cv";
    const aboutMe =  pool.query(query, function (err, results) {
      
      // results = results.map(row => (row.package = JSON.parse(row.package), row));

      // aboutMe = JSON.parse(results[0]['about_me']);

      console.log('aboutMe -----------',results)
      // console.log('aboutMe ------------', aboutMe)
      res.json("Hello")
    });

    console.log('aboutMe', aboutMe)
    
  } catch (error) {
    console.log('error', error)
  }
});

app.post("/postData", async (req, res, next) => {
  try {
    const {emp_id,emp_email,image,resume_data} = req.body;
    let insertData;
    const query = "INSTERT INTO Resume_(emp_id,emp_email,image,resume_data) VALUES ?"
    const value = [
      [emp_id, emp_email,image,resume_data],
    ];
   insertData =  pool.query(query,[value], function (err, results) {
      
      // results = results.map(row => (row.package = JSON.parse(row.package), row));

      // aboutMe = JSON.parse(results[0]['about_me']);

      console.log('aboutMe -----------',results)
      // console.log('aboutMe ------------', aboutMe)
      res.json("Hello")
    });

    console.log('aboutMe', aboutMe)

  } catch (error) {
    console.log('error', error)
  }
});

app.use((error, req, res, next) => {
  console.log('errorr')
  res
    .status(500)
    .json({ Error: "Invalid Request", message: "Please check your url" });
});

app.listen(PORT, () => {
  console.log(`Running at port ${PORT}`);
});
