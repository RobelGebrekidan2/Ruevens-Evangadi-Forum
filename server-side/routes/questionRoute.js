const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleWare/authMiddleWare");
const dbconnection = require("../db/dbConfig");

router.get("/all-questions", authMiddleware, async (req, res) => {
  try {
    const query = `
      SELECT questions.*, users.username
      FROM questions
      JOIN users ON questions.userid = users.userid
    `;

    const result = await dbconnection.query(query);

    const rows = result[0]; // Access the first element of the result array

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const { askQuestion } = require("../controller/questionController");

// Protected routes - Only logged-in users can access
router.post("/ask-question", authMiddleware, askQuestion);

module.exports = router;
