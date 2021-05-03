import React from "react";
import "./LeagueTable.css";

function LeagueTable({ table }) {
  return (
    <div className="table">
      <div className="row header">
        <div></div>
        <div className="club-name">Club</div>
        <div>Pts</div>
        <div>W</div>
        <div>D</div>
        <div>L</div>
        <div>GF</div>
        <div>GA</div>
      </div>
      {table.map((team, index) => (
        <div key={team.name} className="row">
          <div>{index + 1}</div>
          <div className="club-name">{team.name}</div>
          <div>{team.points}</div>
          <div>{team.wins}</div>
          <div>{team.draws}</div>
          <div>{team.losses}</div>
          <div>{team.goalsFor}</div>
          <div>{team.goalsAgainst}</div>
        </div>
      ))}
    </div>
  );
}

export default LeagueTable;
