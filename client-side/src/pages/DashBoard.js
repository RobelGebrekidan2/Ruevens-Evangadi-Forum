import { useContext, useState, useEffect } from "react";
import axios from "../Utility/axiosConfig";
import { Link} from "react-router-dom";
import { AppState } from "../App";
import classes from "../pages/dashboard.module.css";
import LayOut from "../components/LayOut/LayOut";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function DashBoard() {
  const { user } = useContext(AppState);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "/questions/all-questions",
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
    <LayOut>
      <section className={classes.DashBoard_container}>
        <section className={classes.DashBoard_inner_container}>
          <div>
            <button>
              <Link to={"/ask-question"}>Ask Question</Link>
            </button>
            <h1>Welcome: {user.username}</h1>
          </div>

          <h2>Question</h2>

          <ul style={{ margin: "0 auto" }}>
            {questions.map((question) => (
              <li key={question.questionid} className={classes.questionItem}>
                <hr />
                <div className={classes.questionContent}>
                  <div className={classes.questionTitle}>
                    <AccountCircleOutlinedIcon
                      style={{
                        marginLeft: "20px",
                        fontSize: "40px",
                        color: "gray",
                      }}
                    />
                    <p className={classes.mapped}>{question.title}</p>
                      <b>{question.username}</b>                   
                    <Link
                      onClick={() =>
                        localStorage.setItem(
                          "questionInfo",
                          JSON.stringify(question)
                        )
                      }
                      to={`/answer-q/${question.questionid}`}
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      <ArrowForwardIosOutlinedIcon
                        className={classes.icons_right}
                      />
                    </Link>
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </LayOut>
  );
}

export default DashBoard;
