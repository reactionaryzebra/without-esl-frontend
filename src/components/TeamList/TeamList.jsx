import React from "react";
import traitors from "../../constants/traitors.json";
import TeamLogo from "../TeamLogo/TeamLogo.jsx";
import "./TeamList.css";

function TeamList({ onSelect, selectedTeams }) {
  return (
    <div className="team-list">
      <label>Select Traitors to Ban or Unban</label>
      <div className="list">
        {traitors.map(traitor => (
          <TeamLogo
            key={traitor.id}
            team={traitor}
            onSelect={onSelect}
            isSelected={selectedTeams.includes(traitor.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamList;
