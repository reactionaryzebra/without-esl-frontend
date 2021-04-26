import "./App.css";
import { useState } from "react";
import TraitorList from "./components/TraitorList/TraitorList";
import SeasonScroll from "./components/SeasonScroll/SeasonScroll";
import seasons from "./constants/seasons.json";

const initialActiveSeasonId = seasons[0].id;

function App() {
  const [activeSeasonId, setActiveSeasonId] = useState(initialActiveSeasonId);
  function handleChangeSeason(newSeason) {
    setActiveSeasonId(newSeason.id);
  }
  return (
    <div className="App">
      <TraitorList />
      <SeasonScroll
        activeSeasonId={activeSeasonId}
        onChangeSeason={handleChangeSeason}
      />
    </div>
  );
}

export default App;
