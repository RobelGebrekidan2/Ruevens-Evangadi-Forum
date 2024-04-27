const uuid = require("uuid");
const dbconnection = require("../db/dbConfig");

const askQuestion = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ msg: "Please provide a title and description for the question" });
  }

  try {
    // Get the userid from the authenticated user
    const userId = req.user.userid;

    // Generate a UUID for the questionid
    const questionId = uuid.v4();

    // Insert the question into the database with the corresponding userid and questionid
    await dbconnection.query(
      "INSERT INTO questions (questionid, userid, title, description) VALUES (?, ?, ?, ?)",
      [questionId, userId, title, description]
    );

    return res.status(201).json({ msg: "Question asked successfully" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ msg: "Something went wrong, try again later!" });
  }
};

module.exports = { askQuestion };


//************************ */

