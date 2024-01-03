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
interface FetchCategoriesResponse{
    items: Categories[];
}

const useCategories = ()=> {

    const [categories, setCategories] = useState<Categories[]>([]);
    const [error, setError] = useState("");
    const [isLoading ,setLoading] = useState(false)
  
    useEffect(() => {

        const controller = new AbortController();

        setLoading(true)
        apiClient
            .get<FetchCategoriesResponse>("/videoCategories", { signal: controller.signal,
             params: {
             part: "snippet",
             chart: "mostPopular",
            regionCode: "US",
             maxResults: 20,
            },
            })
            .then((res) => {
             setCategories(res.data.items);
             setLoading(false);
            })
            .catch((err) =>{
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            });
        return () => controller.abort();   
  }, []);

  return {categories, error, isLoading}
}

export default useCategories