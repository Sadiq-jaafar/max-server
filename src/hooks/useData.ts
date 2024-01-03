import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Snippet {
    title: string;
}
interface Categories{
    id: string
    snippet: Snippet;

}
interface FetchResponse<T>{
    items: T[];
}

const useData = <T>(endpoint:string)=> {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading ,setLoading] = useState(false)
  
    useEffect(() => {

        const controller = new AbortController();

        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal,
             params: {
             part: "snippet",
             chart: "mostPopular",
            regionCode: "US",
             maxResults: 20,
            },
            })
            .then((res) => {
             setData(res.data.items);
             setLoading(false);
            })
            .catch((err) =>{
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            });
        return () => controller.abort();   
  }, []);

  return {data, error, isLoading}
}

export default useData