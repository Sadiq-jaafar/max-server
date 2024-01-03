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
  
    useEffect(() => {

        const controller = new AbortController();
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
            })
            .catch((err) =>{
                if (err instanceof CanceledError) return;
                setError(err.message)
            });
        return () => controller.abort();   
  }, []);

  return {videos, error}



}


export default useVideos