// //*********** Question and Answers Page */

// import { useContext ,useState,useRef} from "react";
// import { AppState } from "../App";
// import { Link, useNavigate } from "react-router-dom";
// import classes from "./answer.module.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LayOut from "../components/LayOut/LayOut";
// import axios from "../Utility/axiosConfig";

// const AnswerQuestion = () => {
//   const { user } = useContext(AppState);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState("");
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const answerDom = useRef();
//   const questionidDom = useRef();

//   const handelPostAnswer = async () => {
//     const answerValue = answerDom.current.value;
//     // const questionidValue = questionidDom.current.value;

    // if (!answerValue) {
    //   // alert("please provide all required fields !");
    //   setError("please provide all required fields ");
    //   return;
    // }

    //    try {
    //      await axios.post(
    //        "/answers/answer-q",
    //        {
    //          answer: answerValue,
    //         //  questionid: questionidValue,
    //        },
    //        {
    //          headers: {
    //            Authorization: "Bearer " + token,
    //          },
    //        }
    //      );
//           // navigate("/dashboard");
//          setSuccess("Question answered successfully");
//        } catch (error) {
//          setError(error.message);
//          console.log(error.message);
//        }
//   }

//   return (
//     <LayOut>
//       <section className={classes.answer}>
//         <div className={classes.answer_container}>
//           <div>
//             <h2>Question</h2>
//             {}
//           </div>
//           <hr />
//           <div>
//             <h1>Answer From The Community</h1>
//           </div>
//           <hr />
//           {/* <div className={classes.answer_container_icon}>
//             <AccountCircleIcon />
//           </div> */}
//           <div className={classes.answer_container_topq}>
//             <h1>Answer The Top Question</h1>
//             <Link to={"/dashboard"}>Go To Question Page</Link>
//           </div>
//           {error && <p style={{ padding: "5px", color: "red" }}>{error}</p>}
//           <div className="answer_container">
//             <input
//               className={classes.first_input}
//               ref={answerDom}
//               type="text"
//               placeholder="Your answer..."
//             />
//           </div>
//           {/* <div id={classes.id} className={classes.question_container}>
//             <input ref={questionidDom} type="text" placeholder="qid" />
//           </div> */}
        //   {success && (
        //     <p style={{ padding: "5px", color: "green" }}>{success}</p>
        //   )}
//           <button onClick={handelPostAnswer}>
//             <Link>Post Your Answer</Link>
//           </button>
//         </div>
//       </section>
//     </LayOut>
//   );
// };

// export default AnswerQuestion;

// //**************************************** */

//*********** aster */

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PersonPinIcon from "@mui/icons-material/PersonPin";
// import classes from "../pages/answer.module.css"
// import { Link } from "react-router-dom";

// function AnswerComponent() {
//   const [answer, setAnswer] = useState("");
//   const [message, setMessage] = useState("");
//   const [answers, setAnswers] = useState([]);
//   const [question, setQuestion] = useState("");

//   useEffect(() => {
//     fetchQuestion();
//     fetchAnswers();
//   }, []);

//   const fetchQuestion = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(
//         "http://localhost:5500/api/answer/getTopQuestion",
//         {
//           headers: {
//             Authorization:` Bearer ${token}`,
//           }
//         }
//       );

//       if (response.status === 200) {
//         setQuestion(response.data.question || "");
//       } else {
//         setMessage("Failed to fetch question.");
//       }
//     } catch (error) {
//       console.error("Error fetching question:", error.message);
//       setMessage("An error occurred while fetching question.");
//     }
//   };

//   const fetchAnswers = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(
//         "http://localhost:5500/api/answer/allAnswers",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setAnswers(response.data.answers || []);
//       } else {
//         setMessage("Failed to fetch answers.");
//       }
//     } catch (error) {
//       console.error("Error fetching answers:", error.message);
//       setMessage("An error occurred while fetching answers.");
//     }
//   };

//   const postAnswer = async (event) => {
//     event.preventDefault();
//     if (!answer) {
//       setMessage("Please provide an answer.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.post(
//         "http://localhost:5500/api/answer/createAnswer",
//         { answer },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 201) {
//         setMessage("Answer posted successfully.");
//         setAnswer("");
//         fetchAnswers();
//       } else {
//         setMessage("Failed to post answer.");
//       }
//     } catch (error) {
//       console.error("Error posting answer:", error.message);
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   const handleAnswerChange = (event) => {
//     setAnswer(event.target.value);
//   };

//   return (
//     <div className={classes.answer_container}>
//       <h2>Question</h2>
//       <div>
//         <p>{question}</p> {/* Display the fetched question */}
//       </div>
//       <hr />
//       <h3 style={{ marginLeft: "15px" }}>Answer from the community </h3>
//       <hr />

//       <div>
//         {message && <p>{message}</p>}
//         {answers.length > 0 ? (
//           <div>
//             {answers.map((ans, index) => (
//               <div
//                 key={index}
                // style={{
                //   display: "flex",
                //   alignItems: "center",
                //   marginBottom: "10px",
                // }}
//               >
//                 <PersonPinIcon style={{ marginRight: "10px" }} />
//                 <div>
//                   <strong>Answer ID:</strong> {ans.answerid}
//                   <br />
//                   <strong>User ID:</strong> {ans.userId}
//                   <br />
//                   <strong>Answer:</strong> {ans.answer}
//                   <br />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No answers yet.</p>
//         )}
//       </div>

//       <h2 style={{ textAlign: "center" }}>Answer To Top Question</h2>
//       <Link
//         to="/questionform"
//         style={{ textDecoration: "none", color: "black" }}
//       >
//         <p style={{ textAlign: "center" }}>Go to Question page</p>
//       </Link>
//       <br />
//       <br />
//       <textarea
//         className={classes.textA}
//         id="answer"
//         value={answer}
//         onChange={handleAnswerChange}
//         rows="4"
//         cols="50"
//         required
//         placeholder="Your answer..."
//       ></textarea>
//       <br />

//       <button type="submit" onClick={postAnswer}>
//         Post Your Answer
//       </button>
//     </div>
//   );
// }

// export default AnswerComponent;

// *************** after aster

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PersonPinIcon from "@mui/icons-material/PersonPin";
// import classes from "../pages/answer.module.css";
// import { Link } from "react-router-dom";
// import LayOut from "../components/LayOut/LayOut";

// function AnswerQuestion() {
//   const [answer, setAnswer] = useState("");
//   const [message, setMessage] = useState("");
//   const [answers, setAnswers] = useState([]);
//   const [question, setQuestion] = useState("");

//   useEffect(() => {
//     fetchQuestion();
//     fetchAnswers();
//   }, []);

//   const fetchQuestion = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(
//         "http://localhost:5500/api/questions/all-questions",
//         {
//           headers: {
//             Authorization: ` Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setQuestion(response.data.length > 0 ? response.data[0].question : "");
//       } else {
//         setMessage("Failed to fetch question.");
//       }
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching question:", error.message);
//       setMessage("An error occurred while fetching question.");
//     }
//   };

//   const fetchAnswers = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(
//         "http://localhost:5500/api/answers/all-answers",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setAnswers(response.data || []);
//       } else {
//         setMessage("Failed to fetch answers.");
//       }
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching answers:", error.message);
//       setMessage("An error occurred while fetching answers.");
//     }
//   };

//   const postAnswer = async (event) => {
//     event.preventDefault();
//     if (!answer) {
//       setMessage("Please provide an answer.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.post(
//         "http://localhost:5500/api/answers/answer-q",
//         { answer },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 201) {
//         setMessage("Answer posted successfully.");
//         setAnswer("");
//         fetchAnswers();
//       } else {
//         setMessage("Failed to post answer.");
//       }
//     } catch (error) {
//       console.error("Error posting answer:", error.message);
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   const handleAnswerChange = (event) => {
//     setAnswer(event.target.value);
//   };

//   return (
//     <LayOut>
//       <section className={classes.answer}>
//         <section className={classes.answer_container}>
//           <h2>Question</h2>
//           <div>
//             <p>{question}</p> {/* Display the fetched question */}
//           </div>
//           <hr />
//           <h3 style={{ marginLeft: "15px" }}>Answer from the community </h3>
//           <hr />

//           <div>
//             {message && <p>{message}</p>}
//             {answers.length > 0 ? (
//               <div>
//                 {answers.map((ans, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     <PersonPinIcon style={{ marginRight: "10px" }} />
//                     <div>
//                       <strong>Answer ID:</strong> {ans.answerid}
//                       <br />
//                       <strong>User ID:</strong> {ans.userId}
//                       <br />
//                       <strong>Answer:</strong> {ans.answer}
//                       <br />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No answers yet.</p>
//             )}
//           </div>

//           <h2 style={{ textAlign: "center" }}>Answer To Top Question</h2>
//           <Link
//             to="/questionform"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <p style={{ textAlign: "center" }}>Go to Question page</p>
//           </Link>
//           <br />
//           <br />
//           <textarea
//             className={classes.textA}
//             id="answer"
//             value={answer}
//             onChange={handleAnswerChange}
//             rows="4"
//             cols="50"
//             required
//             placeholder="Your answer..."
//           ></textarea>
//           <br />

//           <button type="submit" onClick={postAnswer}>
//             Post Your Answer
//           </button>
//         </section>
//       </section>
//     </LayOut>
//   );
// }

// export default AnswerQuestion;

// ///////////////////88********************** marew

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import classes from "../pages/answer.module.css";
// import { Link, useParams, useLocation } from "react-router-dom";
// import LayOut from "../components/LayOut/LayOut";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// function AnswerQuestion() {
//   const { questionId } = useParams();
//   const [answer, setAnswer] = useState("");
//   const [message, setMessage] = useState("");
//   const [answers, setAnswers] = useState([]);
//   const [question, setQuestion] = useState("");
//   const [previouslyAnsweredQuestionId, setPreviouslyAnsweredQuestionId] =
//     useState("");

//   const fetchQuestion = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(
//         `http://localhost:5500/api/questions/all-questions`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setQuestion(response.data.question || "");
//       } else {
//         setMessage("Failed to fetch question.");
//       }
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching question:", error.message);
//       setMessage("An error occurred while fetching question.");
//     }
//   };

//   const fetchAnswers = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.get(
//         "http://localhost:5500/api/answers/all-answers",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.status, response);

//       if (response.status === 200) {
//         setAnswers(response.data || []);
//       } else {
//         setMessage("Failed to fetch answers.");
//       }
//       // console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching answers:", error.message);
//       setMessage("An error occurred while fetching answers.");
//     }
//   };

//   const previouslyAnsweredQuestionInfo = localStorage.getItem("questionInfo");
//   useEffect(() => {
//     fetchQuestion();
//     fetchAnswers();
//     console.log(previouslyAnsweredQuestionInfo);
//     if (previouslyAnsweredQuestionInfo) {
//       const previouslyAnsweredQuestion = JSON.parse(
//         previouslyAnsweredQuestionInfo
//       );
//       setPreviouslyAnsweredQuestionId(previouslyAnsweredQuestion.questionid);
//       console.log(previouslyAnsweredQuestion.questionid);
//     }
//   }, []);

//   const handleAnswerChange = (event) => {
//     setAnswer(event.target.value);
//   };

//   const submitAnswer = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await axios.post(
//         "http://localhost:5500/api/answers",
//         {
//           questionid: questionId,
//           answer,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 201) {
//         setAnswer("");
//         setMessage("Answer submitted successfully.");
//       } else {
//         setMessage("Failed to submit answer.");
//       }
//     } catch (error) {
//       console.error("Error submitting answer:", error.message);
//       setMessage("An error occurred while submitting the answer.");
//     }
//   };

//   return (
//     <LayOut>
//       <section className={classes.answer}>
//         <section className={classes.answer_container}>
//           <h2>Question:</h2>
//           <div className={classes.questionContent}>
//             <div className={classes.questionTitle}>
//               <p>title:{JSON.parse(previouslyAnsweredQuestionInfo)?.title}</p>
//               description:
//               {JSON.parse(previouslyAnsweredQuestionInfo)?.description}
//             </div>
//             <hr />
//           </div>
//           <h1>Answer From The Community</h1>
//           <hr />
//           <div>
//             {message && <p>{message}</p>}
//             {answers.length > 0 ? (
//               <div>
//                 {console.log(
//                   "previouslyAnsweredQuestionId",
//                   previouslyAnsweredQuestionId
//                 )}
//                 {answers.map(
//                   (ans, index) =>
//                     ans.questionid === previouslyAnsweredQuestionId && (
//                       <div
//                         key={index}
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           marginBottom: "10px",
//                         }}
//                       >
//                         <AccountCircleOutlinedIcon
//                           style={{
//                             marginRight: "10px",
//                             fontSize: "60px",
//                             color: "gray",
//                           }}
//                         />
//                         <div>
//                           {ans.answer}
//                           <br />
//                         </div>
//                       </div>
//                     )
//                 )}
//               </div>
//             ) : (
//               <p>No answers yet.</p>
//             )}
//           </div>
//           <h1>Answer the top Question</h1>
//           <div className={classes.backButton}>
//             <Link to="/dashboard">Go To Question page</Link>
//           </div>
//           <div>
//             <textarea
//               className={classes.answerInput}
//               value={answer}
//               onChange={handleAnswerChange}
//               placeholder="Your answer..."
//               id="answer"
//               rows="15"
//               cols="90"
//               required
//             />
//           </div>
//           <div>
//             <button onClick={submitAnswer} className={classes.answerButton}>
//               Submit Answer
//             </button>
//           </div>
//         </section>
//       </section>
//     </LayOut>
//   );
// }

// export default AnswerQuestion;
//*************************
