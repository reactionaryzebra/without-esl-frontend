import React from "react";
import traitors from "../../constants/traitors.json";
import TraitorLogo from "../TraitorLogo/TraitorLogo.jsx";

const listStyle = {
  padding: "0 15rem",
  display: "flex",
  justifyContent: "space-around"
};

function TraitorList({ onSelect, selectedTeams }) {
  return (
    <div style={listStyle}>
      {traitors.map(traitor => (
        <TraitorLogo
          key={traitor.id}
          team={traitor}
          onSelect={onSelect}
          isSelected={selectedTeams.includes(traitor.id)}
        />
      ))}
    </div>
  );
}

export default TraitorList;
