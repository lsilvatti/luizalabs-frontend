import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { getHash } from "utils";
import { marvelService } from "services";
import { ComicDataContainer } from "components/types";

const useGetComics = (id: number) => {
  const [data, setData] = useState<ComicDataContainer>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id === 0) return;
    setLoading(true);
    (async () => {
      try {
        const response = await marvelService.get(
          `v1/public/characters/${id}/comics`,
          {
            params: getHash(),
          }
        );
        if (response.data.data) setData(response.data.data);
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

export default useGetComics;
