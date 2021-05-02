import "./App.css";
import { useState } from "react";
import TraitorList from "./components/TraitorList/TraitorList";
import SeasonScroll from "./components/SeasonScroll/SeasonScroll";
import LeagueTable from "./components/LeagueTable/LeagueTable";
import seasons from "./constants/seasons.json";
import useFetchTable from "./hooks/useFetchTable.jsx";

const initialActiveSeasonId = seasons[0].id;

function App() {
  const [activeSeasonId, setActiveSeasonId] = useState(initialActiveSeasonId);
  function handleChangeSeason(newSeason) {
    setActiveSeasonId(newSeason.id);
  }
  const { results: table, isFetching } = useFetchTable({
    season: activeSeasonId
  });

  return (
    <div className="App">
      <TraitorList />
      <SeasonScroll
        activeSeasonId={activeSeasonId}
        onChangeSeason={handleChangeSeason}
      />
      <LeagueTable table={table} />
    </div>
  );
}

export default App;
