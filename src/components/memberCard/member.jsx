import "./member.css";
import * as FaIcons from "react-icons/fa";
export const MemberCard = ({ eachMember }) => {
  return (
    <div className="member-card" key={eachMember.id}>
      <img
        className="member-image"
        src={eachMember.avatar_url}
        alt={eachMember.login}
      />
      <div className="member-info">
        <h2 className="headings member-name">{eachMember.login}</h2>
        <p className="text member-bio">{eachMember.bio}</p>

        <ul className="social-icon-wrapper">
          <li className="lists"><FaIcons.FaFacebook className="member-social-icon"/></li>
          <li className="lists"><FaIcons.FaLinkedinIn className="member-social-icon"/></li>
          <li className="lists"><FaIcons.FaMedium className="member-social-icon"/></li>
        </ul>
      </div>
    </div>
  );
};
