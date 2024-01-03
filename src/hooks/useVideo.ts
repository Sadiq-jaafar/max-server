import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Snippet {
    title: string;
    description: string;
    thumbnails: string;
  }
  
  export interface Video {
    id: string;
    snippet: Snippet;
  }
  
  interface FetchVideoResponse {
    items: Video[];
  }
  

const useVideos = ()=> {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState("");
    const [isLoading ,setLoading] = useState(false)
  
    useEffect(() => {

        const controller = new AbortController();

        setLoading(true)
        apiClient
            .get<FetchVideoResponse>("/videos", { signal: controller.signal,
             params: {
             part: "snippet",
             chart: "mostPopular",
            regionCode: "US",
             maxResults: 20,
            },
            })
            .then((res) => {
             setVideos(res.data.items);
             setLoading(false);
            })
            .catch((err) =>{
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            });
        return () => controller.abort();   
  }, []);

  return {videos, error, isLoading}



}


export default useVideos