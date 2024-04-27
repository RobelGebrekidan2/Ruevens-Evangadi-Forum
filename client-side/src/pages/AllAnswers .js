import React, { useEffect, useState } from "react";
import axios from "axios";

const AllAnswers = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5500/api/answers/all-answers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

          setAnswers(response.data);
          console.log(response.data);
      } catch (error) {
        console.error("Error fetching answers:", error.message);
      }
    };

    fetchAnswers();
  }, []);

  return (
    <div>
      <h2>All Answers</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer.answerId}>{answer.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllAnswers;
