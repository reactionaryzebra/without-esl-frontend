import React from "react";
import logos from "../../logos";

function TraitorLogo({ team, onSelect }) {
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
      style={{ width: "50px", height: "50px" }}
    />
  );
}

export default TraitorLogo;
