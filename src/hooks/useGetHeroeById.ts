import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { getHash } from 'utils/getHash';
import { marvelService } from 'services';



const useGetHeroById = (id: number) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        (async () => {
            try {
                const response = await marvelService.get(`v1/public/characters/${id}`, {
                    params: getHash()
                });
                setData(response.data.data);
            } catch(err) {
                const error = err as Error | AxiosError;
                setError(error.message)
            } finally {
                setLoading(false)
            }
        })();
    }, [id])

    return {data, error, loading}
}

export default useGetHeroById;