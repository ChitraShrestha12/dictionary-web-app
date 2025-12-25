import useFetch from "../hook/useFetch";
import NotFoundWord from "./NotFoundWord";
import DefinitionPage from "../Pages/DefinitionPage";
import { useEffect } from "react";

function DictionaryDefinition() {
  const [fetchedData, isLoading, isError, setIsError] = useFetch();
  useEffect(() => {
    if (fetchedData.title === "No Definitions Found") {
      setIsError(true);
    }
  }, [fetchedData.title]);
  return (
    <>
      {isLoading && <div className="loader"></div>}
      {isError && <NotFoundWord />}
      {fetchedData.length > 0 && !isLoading && !isError && (
        <DefinitionPage fetchedData={fetchedData} />
      )}
    </>
  );
}

export default DictionaryDefinition;
