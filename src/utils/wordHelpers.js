export const getAntonyms = (fetchedData) => {
  const findAntonyms = fetchedData[0]?.meanings?.find(
    (word) => word?.antonyms?.length
  );
  return findAntonyms?.antonyms;
};

export const getSynonyms = (fetchedData) => {
  const findSynonyms = fetchedData[0]?.meanings?.find(
    (word) => word?.synonyms?.length
  );
  return findSynonyms?.synonyms;
};

export const delayLoading = (cb) =>{
  setTimeout(cb,1000)
}
