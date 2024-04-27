import { useContext, useState ,useEffect} from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../img/evangadi-logo-black.png";
import { AppState } from "../App";

const Header = () => {
  const { user } = useContext(AppState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

      useEffect(() => {
        setIsLoggedIn(user);
      }, [user]);
  const handleButtonClick = () => {
    setIsLoggedIn((prevIsLoggedIn) => !isLoggedIn);
  }

    return (
      <section className={classes.Header}>
        <div className={classes.Header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={classes.Header_linkBtn}>
            <div className={classes.Header_container_link}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">How it Works</Link>
                </li>
              </ul>
            </div>
            <button onClick={handleButtonClick}>
              <Link to={isLoggedIn ? "/" : "/register"}>
                {isLoggedIn ? "Logout" : "Sign In"}
              </Link>
            </button>
          
          </div>
        </div>
      </section>
    );
  };


export default Header;