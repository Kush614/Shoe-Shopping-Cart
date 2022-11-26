import "./contact.css";
import { data } from "../../backend/data";
import * as FaIcons from "react-icons/fa";

export const Contacts = () => {
  return (
    <div className="container contact-container">
      <div className="wrapper contact-wrapper">
        <header>
          <h2 className="headings member-quote">REACT US AT</h2>
        </header>

        <div className="contact-card-wrapper">
          {data.contact.map((eachContact) => (
            <div className="contact-card">
              <h2 className="headings company-email">
                {eachContact.email}@kicksup.com
              </h2>
              <p className="text contact-info">{eachContact.work}</p>
            </div>
          ))}
        </div>

        <footer className="contact-footer">
        <p className="text">GET IN TOUCH</p>
          <ul className="social-icon-wrapper">

            <li className="lists">
              <FaIcons.FaFacebook className="member-social-icon" />
            </li>
            <li className="lists">
              <FaIcons.FaLinkedinIn className="member-social-icon" />
            </li>
            <li className="lists">
              <FaIcons.FaMedium className="member-social-icon" />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
