import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { getHash } from "utils";
import { marvelService } from "services";
import {
  CharacterDataContainer,
  HeroesFetchable,
  orderBy,
} from "components/types";

const useGetCharacters = (name?: string, order?: orderBy, page: number = 0) => {
  const [data, setData] = useState<CharacterDataContainer>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestParams: HeroesFetchable = {
      ...getHash(),
      offset: page * 20,
      limit: 20,
    };
    if (name) requestParams.nameStartsWith = name;
    if (order) requestParams.orderBy = order;
    (async () => {
      setLoading(true);
      try {
        const response = await marvelService.get("v1/public/characters", {
          params: requestParams,
        });
        if (response.data.data) setData(response.data.data);
      } catch (err) {
        const error = err as Error | AxiosError;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [name, order, page]);

  return { data, error, loading };
};

export default useGetCharacters;
