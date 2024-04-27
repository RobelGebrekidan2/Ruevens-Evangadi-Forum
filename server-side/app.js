require("dotenv").config()

const express = require("express");
const app = express();
const port = 5500;

const cors = require('cors');
app.use(cors())


// db connection
const dbconnection = require("./db/dbConfig");

// authentication  middleware
const authMiddleware = require("./middleWare/authMiddleWare");

// user route middleWare file
const userRoutes = require("./routes/userRoute");

// question route middleWare file
const questionsRoutes = require("./routes/questionRoute")

// answer route middleWare file
const answersRoutes = require("./routes/answerRoute")


// json middleware to extract json data
// the Express application is able to automatically parse and extract the JSON data from the request body, making it accessible in your route handlers through req.body.
app.use(express.json())

// user route middleWare
app.use("/api/users", userRoutes);

// question route middleWare ?
app.use("/api/questions", authMiddleware, questionsRoutes);

// answer route middleWare ?
app.use("/api/answers",authMiddleware, answersRoutes);

const start = async () => {
  try {
      const result = await dbconnection.execute("select 'test' ");
      await app.listen(port);
      console.log("database connection established")
      console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
};
start();






