// VideoGrid.tsx

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Snippet {
  title: string;
  description: string;
}

interface Video {
  id: string;
  snippet: Snippet;
}

interface FetchVideoResponse {
  items: Video[];
}

const VideoGrid = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchVideoResponse>("/videos", {
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
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.snippet.title}</li>
        ))}
      </ul>
    </>
  );
};

export default VideoGrid;
