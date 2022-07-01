import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { getHash } from 'utils/getHash';
import { marvelService } from 'services';

interface HeroesFetchable {
    ts: number;
    hash: string;
    nameStartsWith?: string;
}

const useGetCharacters = (name: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const requestParams: HeroesFetchable = {
            ...getHash()
        };
        if(name) requestParams.nameStartsWith = name;
        
        (async () => {
            try {
                const response = await marvelService.get('v1/public/characters', {
                    params: requestParams
                });
                setData(response.data.data);
            } catch(err) {
                const error = err as Error | AxiosError;
                setError(error.message)
            } finally {
                setLoading(false)
            }
        })();
    }, [name])

    return {data, error, loading}
}

export default useGetCharacters;