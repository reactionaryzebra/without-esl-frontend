import React from "react";
import seasons from "../../constants/seasons.json";
import icons from "../../icons";

function SeasonScroll({ activeSeasonId, onChangeSeason }) {
  const season = seasons.find(({ id }) => id === activeSeasonId);
  const seasonIdx = seasons.findIndex(({ id }) => id === activeSeasonId);

  function handleNavigateSeason(adjustment) {
    const newIdx = seasonIdx + adjustment;
    const newSeason = seasons[newIdx];
    onChangeSeason(newSeason);
  }
  return (
    <div>
      <span
        onClick={() => handleNavigateSeason(-1)}
        style={{
          visibility: seasonIdx === 0 ? "hidden" : "visible",
          cursor: "pointer"
        }}
      >
        <img src={icons["chevronLeft"]} alt="left" title="left" />
      </span>
      <span>{season.displayName}</span>
      <span
        onClick={() => handleNavigateSeason(1)}
        style={{
          visibility: seasonIdx === seasons.length - 1 ? "hidden" : "visible",
          cursor: "pointer"
        }}
      >
        <img src={icons["chevronRight"]} alt="right" title="right" />
      </span>
    </div>
  );
}

export default SeasonScroll;
