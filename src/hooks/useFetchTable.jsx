import { useState, useEffect } from "react";

function resolveRow({ goals_for, goals_against, ...rest }) {
  return {
    ...rest,
    goalsFor: goals_for,
    goalsAgainst: goals_against
  };
}

function useFetchTable({ season = "1011", excludedTeams = [] }) {
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchTable() {
      const endpoint = process.env.REACT_APP_GET_TABLE_ENDPOINT;
      const params = JSON.stringify({
        season,
        excludedTeams
      });
      const data = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=UTF-8"
        },
        body: params
      });
      const response = await data.json();
      return response;
    }

    setIsFetching(true);
    fetchTable().then(table => {
      const resolvedTable = table.map(resolveRow);
      setResults(resolvedTable);
    });
    setIsFetching(false);
  }, [season, excludedTeams.length]);

  return {
    results,
    isFetching
  };
}

export default useFetchTable;
