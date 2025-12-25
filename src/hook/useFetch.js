import React, { useContext, useEffect, useState } from "react";
import { PreferencesContext } from "../context/PreferencesContext";
import { delayLoading } from "../utils/wordHelpers";

function useFetch() {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchDataWord() {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${preferences.userWord}`
        );
        if (!res.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await res.json();
        delayLoading(() => {
          setFetchedData(data);
          setIsLoading(false);
        });
      } catch (err) {
        delayLoading(() => {
          setIsError(true);
          setIsLoading(false);
          setFetchedData([]);
        });
      }
    }
    if (preferences.userWord) {
      fetchDataWord();
    }
  }, [preferences.userWord]);

  return [fetchedData, isLoading, isError, setIsError];
}

export default useFetch;
