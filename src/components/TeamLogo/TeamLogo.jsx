import React from "react";
import logos from "../../logos";
import "./TeamLogo.css";

function TraitorLogo({ team, onSelect, isSelected }) {
  const { logoId, displayName, id } = team;
  const logoSrc = logos[logoId];

  const classNames = `logo${isSelected ? " is-selected" : ""}`;

  function handleClick() {
    onSelect(id);
  }

  return (
    <img
      id={id === "Tottenham" ? "tottenham" : ""}
      className={classNames}
      onClick={handleClick}
      src={logoSrc}
      alt={displayName}
      title={displayName}
    />
  );
}

export default TraitorLogo;
