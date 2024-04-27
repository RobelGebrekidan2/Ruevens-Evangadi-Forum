const express = require("express");
const router = express.Router();
const dbconnection = require("../db/dbConfig");
const authMiddleware = require("../middleWare/authMiddleWare");

router.get("/all-answers", authMiddleware, async (req, res) => {
  try {
    const query = `
      SELECT answers.*, users.username
      FROM answers
      JOIN users ON answers.userid = users.userid
    `;

    const result = await dbconnection.query(query);

    const rows = result[0]; // Access the first element of the result array

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


const { answerQuestion } = require("../controller/answerController");

// Protected routes - Only logged-in users can access
router.post("/answer-q", authMiddleware, answerQuestion);



module.exports = router;