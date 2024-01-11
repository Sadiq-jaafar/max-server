import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
interface Snippet {
    title: string;
}
interface Categories{
    id: string
    snippet: Snippet;

}
export interface FetchResponse<T>{
    items: T[];
}

const useData = <T>(endpoint:string, requestConfig?:AxiosRequestConfig , deps?:any[])=> {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading ,setLoading] = useState(false)
  
    useEffect(() => {

        const controller = new AbortController();

        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig,
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
  },deps ? [...deps] :[]);

  return {data, error, isLoading}
}

export default useData