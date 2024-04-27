import React from "react";
import classes from "./footer.module.css";
import logo from "../img/evangadi-logo-footer.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <section className={classes.Footer_outer_container}>
      <div className={classes.Footer_inner_container}>
        <div className={classes.Footer_inner_left}>
          <div>
            <img src={logo} />
          </div>
          <div className={classes.Footer_inner_left_icon}>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className={classes.Footer_inner_middle}>
          <p>Useful Link</p>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className={classes.Footer_inner_right}>
          <p>Contact Info</p>
          <ul>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
