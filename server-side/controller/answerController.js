const dbconnection = require("../db/dbConfig");
const uuid = require("uuid");

const answerQuestion = async (req, res) => {
  const { answer, questionid } = req.body;

  if (!answer || !questionid) {
    return res
      .status(400)
      .json({ msg: "Please provide an answer and questionid" });
  }

  try {
    // Get the userid from the authenticated user
    const userId = req.user.userid;

    // Insert the answer into the database with the corresponding userid and questionid
    await dbconnection.query(
      "INSERT INTO answers (userid, questionid, answer) VALUES (?, ?, ?)",
      [userId, questionid, answer]
    );

    return res.status(201).json({ msg: "Question answered successfully" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ msg: "Something went wrong, try again later!" });
  }
};

module.exports = { answerQuestion };

