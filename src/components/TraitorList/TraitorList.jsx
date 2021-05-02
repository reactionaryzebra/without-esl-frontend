import React from "react";
import traitors from "../../constants/traitors.json";
import TraitorLogo from "../TraitorLogo/TraitorLogo.jsx";

function TraitorList({ onSelect, selectedTeams }) {
  return traitors.map(traitor => (
    <TraitorLogo
      key={traitor.id}
      team={traitor}
      onSelect={onSelect}
      isSelected={selectedTeams.includes(traitor.id)}
    />
  ));
}

export default TraitorList;
