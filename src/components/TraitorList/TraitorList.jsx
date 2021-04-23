import React from "react";
import traitors from "../../constants/traitors.json";
import TraitorLogo from "../TraitorLogo/TraitorLogo.jsx";

function TraitorList() {
  return traitors.map(traitor => <TraitorLogo team={traitor} />);
}

export default TraitorList;
