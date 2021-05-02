import React from "react";

function LeagueTable({ table }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Pos</th>
          <th>Club</th>
          <th>Pts</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
        </tr>
      </thead>
      <tbody>
        {table.map((team, index) => (
          <tr key={team.name}>
            <td>{index + 1}</td>
            <td>{team.name}</td>
            <td>{team.points}</td>
            <td>{team.wins}</td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>
            <td>{team.goalsFor}</td>
            <td>{team.goalsAgainst}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeagueTable;
