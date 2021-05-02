import { useState, useEffect } from "react";
import { host, tableEndpoint } from "../constants/api.json";

function useFetchTable({ season = "1011", excludedTeams = [] }) {
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchTable() {
      const endpoint = host + tableEndpoint;
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
    fetchTable().then(table => setResults(table));
    setIsFetching(false);
  }, [season, excludedTeams.length]);

  return {
    results,
    isFetching
  };
}

export default useFetchTable;
