import React from "react";
import traitors from "../../constants/traitors.json";
import TeamLogo from "../TeamLogo/TeamLogo.jsx";

const listStyle = {
  padding: "0 15rem",
  display: "flex",
  justifyContent: "space-around"
};

function TeamList({ onSelect, selectedTeams }) {
  return (
    <div style={listStyle}>
      {traitors.map(traitor => (
        <TeamLogo
          key={traitor.id}
          team={traitor}
          onSelect={onSelect}
          isSelected={selectedTeams.includes(traitor.id)}
        />
      ))}
    </div>
  );
}

export default TeamList;
