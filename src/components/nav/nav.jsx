import "./nav.css";
import * as FaIcon from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { activeLinkHandler } from "../../utils/activeLink";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="wrapper nav-wrapper">
        <div className="logo">
          <img
            src= "https://res.cloudinary.com/dhqxln7zi/image/upload/v1661579343/websitelogo_aqcw75.png"
            
            className="site-logo"
            alt="site-logo"
          />
        </div>
        <div className="nav-link">
          <ul className="nav-ul">
            <NavLink
              to="/"
              style={activeLinkHandler}
              className="lists nav-link"
            >
              The Journey
            </NavLink>
            <NavLink
              to="/store"
              style={activeLinkHandler}
              className="lists nav-link"
            >
              Store
            </NavLink>
            <NavLink
              to="/team"
              style={activeLinkHandler}
              className="lists nav-link"
            >
              Team
            </NavLink>
            <NavLink
              to="/contact"
              style={activeLinkHandler}
              className="lists nav-link"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="login">
          <button className="btn btn-login">
            {" "}
            <FaIcon.FaUserAlt className="icons" />
            <span className="username">Kush</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
