import React from "react";
import seasons from "../../constants/seasons.json";
import icons from "../../icons";
import "./SeasonScroll.css";

function SeasonScroll({ activeSeasonId, onChangeSeason }) {
  const season = seasons.find(({ id }) => id === activeSeasonId);
  const seasonIdx = seasons.findIndex(({ id }) => id === activeSeasonId);

  function handleNavigateSeason(adjustment) {
    const newIdx = seasonIdx + adjustment;
    const newSeason = seasons[newIdx];
    onChangeSeason(newSeason);
  }
  return (
    <div className="season-scroll">
      <label>Season</label>
      <div className="nav">
        <img
          src={icons["chevronLeft"]}
          alt="left"
          title="left"
          onClick={() => handleNavigateSeason(-1)}
          style={{
            visibility: seasonIdx === 0 ? "hidden" : "visible",
            cursor: "pointer",
            height: "1rem",
            marginRight: "0.4rem"
          }}
        />
        <span>{season.displayName}</span>
        <img
          src={icons["chevronRight"]}
          alt="right"
          title="right"
          onClick={() => handleNavigateSeason(1)}
          style={{
            visibility: seasonIdx === seasons.length - 1 ? "hidden" : "visible",
            cursor: "pointer",
            height: "1rem",
            marginLeft: "0.4rem"
          }}
        />
      </div>
    </div>
  );
}

export default SeasonScroll;
