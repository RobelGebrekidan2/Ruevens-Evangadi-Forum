// import { useContext, useState, useEffect } from "react";
// import { AppState } from "../App";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../Utility/axiosConfig";
// import LayOut from "../components/LayOut/LayOut";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import classes from "./dashboard.module.css"

// const DashBoard = () => {
//   const { user } = useContext(AppState);
//   const [questions, setQuestions] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     // Function to fetch questions from the database
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get("/questions/all-questions", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setQuestions(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <LayOut>
//       <section className={classes.DashBoard_container}>
//         <div className={classes.DashBoard_inner_container}>
//           <div>
//             <button>
//               <Link to={"/ask-question"}>Ask Question</Link>
//             </button>
//             <h1>welcome: {user.username}</h1>
//           </div>
//           <hr />
//           <h2>Questions</h2>
//           <div>
//             <div className={classes.icons}>
//               <div className={classes.icons_left}>
//                 <AccountCircleOutlinedIcon
//                 style={{ marginLeft: "20px", marginTop: "20px" }}
//               />
//               </div>
//               <div className={classes.icons_right}>
//                 <Link to="/answer-q">
//                 <ArrowForwardIosOutlinedIcon style={{ marginTop: "20px" }} />
//               </Link>
//               </div>
//             </div>
//             <hr />

//             {questions.map((question, i) => (
//               <div key={i}>
//                 <h3>{question.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// };

// export default DashBoard;

// ***********************
// import { useContext, useState, useEffect } from "react";
// import { AppState } from "../App";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../Utility/axiosConfig";
// import LayOut from "../components/LayOut/LayOut";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import classes from "./dashboard.module.css";

// const DashBoard = () => {
//   const { user } = useContext(AppState);
//   const [questions, setQuestions] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     // Function to fetch questions from the database
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get("/questions/all-questions", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setQuestions(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <LayOut>
//       <section className={classes.DashBoard_container}>
//         <div className={classes.DashBoard_inner_container}>
//           <div>
//             <button>
//               <Link to={"/ask-question"}>Ask Question</Link>
//             </button>
//             <h1>Welcome: {user.username}</h1>
//           </div>
//           <hr />
//           <h2>Questions</h2>
//           {questions.map((question, i) => (
//             <div key={i}>
//               <div className={classes.icons}>
//                 <div className={classes.icons_left}>
//                   <AccountCircleOutlinedIcon
//                     style={{ marginLeft: "20px", marginTop: "0px" ,fontSize:"40px", color:"gray" }}
//                   />
//                   <h3>{question.username}</h3>
//                 </div>
//                 <div className={classes.icons_right}>
//                   <Link to="/answer-q">
//                     <ArrowForwardIosOutlinedIcon
//                       style={{ marginTop: "20px" }}
//                     />
//                   </Link>
//                 </div>
//               </div>
//               {/* Display title below the icons */}
//               <Link style={{fontSize:"20px",marginRight:"400px"}} to={"/answer-q"}>{question.title}</Link>
//               <hr />
//             </div>
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// };

// export default DashBoard;

//************************************************************* * /

// import { useContext, useState, useEffect } from "react";
// import { AppState } from "../App";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../Utility/axiosConfig";
// import LayOut from "../components/LayOut/LayOut";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import classes from "./dashboard.module.css";

// const DashBoard = () => {
//   const { user } = useContext(AppState);
//   const [questions, setQuestions] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     // Function to fetch questions from the database
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get("/questions/all-questions", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setQuestions(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <LayOut>
//       <section className={classes.DashBoard_container}>
//         <div className={classes.DashBoard_inner_container}>
//           <div>
//             <button>
//               <Link to={"/ask-question"}>Ask Question</Link>
//             </button>
//             <h1>Welcome: {user.username}</h1>
//           </div>
//           <hr />
//           <h2>Questions</h2>
//           {questions.map((question, i) => (
//             <div key={question.questionid}>
//               <div className={classes.icons}>
//                 <div className={classes.icons_left}>
//                   <AccountCircleOutlinedIcon
//                     style={{ marginLeft: "20px", marginTop: "0px" ,fontSize:"40px", color:"gray" }}
//                   />
//                   <h3>{question.userid}</h3>
//                 </div>
//                 <div className={classes.icons_right}>
//                   <Link to={"/answer-q"}>
// <ArrowForwardIosOutlinedIcon
//   style={{ marginTop: "20px" }}
// />
//                   </Link>
//                 </div>
//               </div>
//               {/* Display title below the icons */}
//               <Link style={{fontSize:"20px",marginRight:"400px"}} to={"/answer-q"}>{question.title}</Link>
//               <hr />
//             </div>
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// };

// export default DashBoard;

// ************************** asters

// import { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // Import Link
// import { AppState } from "../App";
// import classes from "../pages/dashboard.module.css";
// import QuestionForm from "./AskQuestion";
// import LayOut from "../components/LayOut/LayOut";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

// function DashBoard() {
//   const { user } = useContext(AppState);
//   const [questions, setQuestions] = useState([]);
//   const [showQuestionForm, setShowQuestionForm] = useState(false);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const response = await axios.get(
//           "http://localhost:5500/api/questions/all-questions",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setQuestions(response.data);
//       } catch (error) {
//         console.error("Error fetching questions:", error.message);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <LayOut>
//       <section className={classes.DashBoard_container}>
//         <section className={classes.DashBoard_inner_container}>
//           <div>
//             <button>
//               <Link to={"/ask-question"}>Ask Question</Link>
//             </button>
//             <h1>Welcome: {user.username}</h1>
//           </div>

//           <h2>Question</h2>

//           {showQuestionForm && <QuestionForm />}
//           <ul style={{ margin: "0 auto" }}>
//             {questions.map((question) => (
//               <li key={question.questionid} className={classes.questionItem}>
//                 <hr />
//                 <div className={classes.questionContent}>
//                   <div className={classes.questionTitle}>
//                     <AccountCircleOutlinedIcon
//                       style={{
//                         marginLeft: "20px",
//                         fontSize: "40px",
//                         color: "gray",
//                       }}
//                     />
//                     <p className={classes.maped}>{question.title}</p>
//                     <Link
//                       to="/answer-q"
//                       style={{
//                         color: "black",
//                         fontWeight: "bold",
//                         marginLeft: "10px",
//                       }}
//                     >
//                       <ArrowForwardIosOutlinedIcon
//                         className={classes.icons_right}
//                       />
//                     </Link>
//                   </div>
//                   {/* <div className={classes.questionDescription}>
//                     <strong>Description:</strong> {question.description}
//                   </div> */}
//                 </div>
//                 <hr />
//               </li>
//             ))}
//           </ul>
//         </section>
//       </section>
//     </LayOut>
//   );
// }

// export default DashBoard

/////////////////////////////////********************* */
