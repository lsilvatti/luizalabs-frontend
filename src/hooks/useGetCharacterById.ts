import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { getHash } from "utils";
import { marvelService } from "services";
import { Character } from "components/types";

const useGetCharacterById = (id: number) => {
  const [data, setData] = useState<Character>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === 0) return;
    setLoading(true);
    (async () => {
      try {
        const response = await marvelService.get(`v1/public/characters/${id}`, {
          params: getHash(),
        });
        const characterDataContainer = response.data.data;
        if (characterDataContainer && characterDataContainer.count === 1)
          setData(characterDataContainer.results[0]);
      } catch (err) {
        const error = err as Error | AxiosError;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return { data, error, loading };
};

export default useGetCharacterById;
