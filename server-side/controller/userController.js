// db connection
const dbconnection = require("../db/dbConfig");

const bcrypt = require("bcrypt");
// const { StatusCodes } = require("http-status-codes");

const jwt = require("jsonwebtoken");


const register = async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;

  if (!email || !password || !firstname || !lastname || !username) {
    return res
      .status(400)
      .json({ msg: "please provide all required fields !" });
  }
  try {
    // to capture the first element of the array and assigning it directly to the user variable.

    const [user] = await dbconnection.query(
      "SELECT username,userid from users WHERE username = ? or email = ?",
      [username, email]
    );

    if (user.length > 0) {
      return res.status(400).json({ msg: "user already registered" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "password must be at least 8 characters" });
    }

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //  // return res.json({user:user})

    await dbconnection.query(
      "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, email, hashedPassword]
    );

    return res.status(201).json({ msg: "user registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ msg: "something went wrong, try again later!" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all required fields" });
  }

  try {
    // to capture the first element of the array and assigning it directly to the user variable.
    const [user] = await dbconnection.query(
      "SELECT username,userid,password FROM users WHERE email=?",
      [email]
    );

    if (user.length == 0) {
      return res.status(400).json({ msg: "Invalid credential" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credential" });
    }

    //The secret is used to both sign the JWT during creation and verify its authenticity during verification.
    
    const username = user[0].username;
    const userid = user[0].userid;
    const token = jwt.sign({ username, userid }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({ msg: "user login successful", token,username });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ msg: "something went wrong, try again later!" });
  }
};

const checkUser = async (req, res) => {
  const username = req.user.username
  const userid = req.user.userid;

  res.status(201).json({msg:"valid user",username,userid})

};

module.exports = { register, login, checkUser };
