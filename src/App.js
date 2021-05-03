import "./App.css";
import { useState } from "react";
import TeamList from "./components/TeamList/TeamList";
import SeasonScroll from "./components/SeasonScroll/SeasonScroll";
import LeagueTable from "./components/LeagueTable/LeagueTable";
import seasons from "./constants/seasons.json";
import useFetchTable from "./hooks/useFetchTable.jsx";
import traitors from "./constants/traitors.json";

const initialActiveSeasonId = seasons[0].id;
const initialExcludedTeams = traitors.map(({ id }) => id);

function App() {
  const [activeSeasonId, setActiveSeasonId] = useState(initialActiveSeasonId);
  const [excludedTeams, setExcludedTeams] = useState(initialExcludedTeams);

  const { results: table, isFetching } = useFetchTable({
    season: activeSeasonId,
    excludedTeams
  });

  function handleToggleExcludeTeam(teamId) {
    if (excludedTeams.includes(teamId)) {
      setExcludedTeams(excludedTeams.filter(_teamId => teamId !== _teamId));
    } else {
      setExcludedTeams([...excludedTeams, teamId]);
    }
  }

  function handleChangeSeason(newSeason) {
    setActiveSeasonId(newSeason.id);
  }

  return (
    <div className="App">
      <header>
        <h1>Without ESL</h1>
        <div>
          What would the Premier League have looked like the last ten years
          without any combination of the ESL six? Select any number of teams to
          include/exclude and any season to see the final table.
        </div>
      </header>
      <main>
        <TeamList
          onSelect={handleToggleExcludeTeam}
          selectedTeams={excludedTeams}
        />
        <SeasonScroll
          activeSeasonId={activeSeasonId}
          onChangeSeason={handleChangeSeason}
        />
        <LeagueTable table={table} />
      </main>
    </div>
  );
}

export default App;
