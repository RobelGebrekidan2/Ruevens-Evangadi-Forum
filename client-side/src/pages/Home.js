// // **********QuestionPage / HomePage

// import { useContext } from "react";
// import { AppState } from "../App";
// import { Link, useNavigate } from "react-router-dom";
// import classes from "../css/home.module.css";

// const Home = () => {
//   const { user } = useContext(AppState);
//   // console.log(user);
//   const navigate = useNavigate();

// //  const handleAsk = () => {
// //    navigate("/ask-question");
// //  }

//   return (
//     <section>
//       <div>
//         {/* <button onClick={handleAsk}>Ask Question</button> */}
//         <button>
//           <Link to={"/ask-question"}>Ask Question</Link>
//         </button>
//         <h1>welcome: {user.username}</h1>
//       </div>
//       <h2>Questions</h2>
//       <div></div>
//     </section>
//   );
// };

// export default Home;

//********************************************************** */
// _______________________________________

// import React, { useContext, useEffect, useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import classes from "./home.module.css";
// import axios from "../Utility/axiosConfig";
// import LayOut from "../components/LayOut/LayOut";
// import { AppState } from "../App";

// const baseURL = "http://localhost:5500/api";
// const api = axios.create({
//   baseURL: baseURL,
// });

// const Home = () => {
//   const { user } = useContext(AppState);
//   const navigate = useNavigate();
//   const [questions, setQuestions] = useState([]);
//   const token = localStorage.getItem("token");

//   const handleAsk = () => {
//     navigate("/ask-question");
//   };

//   const questionidDom = useRef();
//   const titleDom = useRef();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const titleValue = titleDom.current.value;
//         const questionidValue = questionidDom.current.value;

//         const response = await api.get("/questions/all-questions", {
//           params: {
//             title: titleValue,
//             questionid: questionidValue,
//           },
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });

//         if (Array.isArray(response.data)) {
//           const sortedQuestions = response.data.sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           setQuestions(sortedQuestions);
//         } else {
//           console.log("Unexpected response format:", response.data);
//         }
//       } catch (error) {
//         console.log("Error fetching questions:", error.response);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <LayOut>
//       <section>
//         <div>
//           <button onClick={handleAsk}>Ask Question</button>
//           <h1>Welcome: {user.username}</h1>
//         </div>
//         <h2>Questions</h2>
//         <div>
//           {questions.map((question) => (
//             <div key={question.questionid}>
//               <h3>
//                 <Link to={`/question/${question.questionid}`}>
//                   {question.title}
//                 </Link>
//               </h3>
//               <p>Description: {question.description}</p>
//               <p>Username: {question.username}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </LayOut>
//   );
// };

// export default Home;


import React from 'react'
import Login from './Login';
import Register from './Register';
import classes from  "./home.module.css"

const Home = () => {
  return (
    <div className={classes.bg}>
      <Login />
      {/* <Register/> */}
    </div>
  );
}
export default Home;
