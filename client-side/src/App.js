import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "./Utility/axiosConfig";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AskQuestion from "./pages/AskQuestion";
import AnswerQuestion from "./pages/AnswerQuestion";
import DashBoard from "./pages/DashBoard";

export const AppState = createContext();

const App = () => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="ask-question" element={<AskQuestion />} />
        <Route path="/answer-q/:questionId" element={<AnswerQuestion />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </AppState.Provider>
  );
};

export default App;

// hxgjfdsgfyjdsg