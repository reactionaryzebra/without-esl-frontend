import React from "react";
import logos from "../../logos";

function TraitorLogo({ team, onSelect, isSelected }) {
  const { logoId, displayName, id } = team;
  const logoSrc = logos[logoId];

  function handleClick() {
    onSelect(id);
  }

  return (
    <img
      onClick={handleClick}
      src={logoSrc}
      alt={displayName}
      title={displayName}
      style={{
        cursor: "pointer",
        width: "50px",
        height: "50px",
        opacity: isSelected ? "0.25" : "1"
      }}
    />
  );
}

export default TraitorLogo;
