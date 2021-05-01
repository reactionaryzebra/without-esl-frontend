import React from "react";
import logos from "../../logos";

function TraitorLogo({ team }) {
  const { logoId, displayName } = team;
  const logoSrc = logos[logoId];
  return (
    <img
      src={logoSrc}
      alt={displayName}
      title={displayName}
      style={{ width: "50px", height: "50px" }}
    />
  );
}

export default TraitorLogo;
