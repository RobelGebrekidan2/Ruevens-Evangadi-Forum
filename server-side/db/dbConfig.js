const mysql2 = require("mysql2");
const dbconnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: "localhost",
  password: process.env.PASSWORD,
  connectionLimit: 10,
  // user: "sql10695190",
  // database: "sql10695190",
  // host: "localhost",
  // password: "QFql1MMgu4",

  // connectionLimit: 10,
});

// to solve the callback hell
module.exports = dbconnection.promise();

// dgfyudtefyewfdgywueg

// echo "# Ruevens-Evangadi-Forum" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/RobelGebrekidan2/Ruevens-Evangadi-Forum.git
// git push -u origin main



// git remote add origin https://github.com/RobelGebrekidan2/Ruevens-Evangadi-Forum.git
// git branch -M main
// git push -u origin main
