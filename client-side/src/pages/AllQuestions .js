import React, { useEffect, useState } from "react";
import axios from "axios";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5500/api/questions/all-questions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error.message);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>All Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.questionId}>{question.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllQuestions;
