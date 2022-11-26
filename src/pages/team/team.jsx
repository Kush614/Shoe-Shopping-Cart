import { MemberCard } from "../../components";
import "./team.css";
import { data } from "../../backend/data";

export const Teams = () => {
  const { teamMembers } = data;

  return (
    <div className="container team-container">
      <div className="wrapper team-wrapper">
        <header>
          <h2 className="headings member-quote">
            Without bonding and co-ordination, every project is failure, Look at
            who makes KICKSUP great
          </h2>
        </header>

        <div className="team-member-container">
          {teamMembers.map((eachMember) => (
            <MemberCard eachMember={eachMember} />
          ))}
        </div>
      </div>
    </div>
  );
};
