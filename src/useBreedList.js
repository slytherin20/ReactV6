import { useEffect, useState } from "react";

const localeCache = {};

const useBreedList = (animal) => {
  const [status, setStatus] = useState("unloaded");
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    if (!animal) setBreedList([]);
    else if (localeCache[animal]) {
      setBreedList(localeCache[animal]);
    } else {
      requestBreeds();
    }
    async function requestBreeds() {
      setBreedList([]);
      setStatus("loading");
      let res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      let json = await res.json();
      localeCache[animal] = json.breeds || [];
      setBreedList(localeCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;
