// useMediaPlayer.ts

import axios from "axios";
import { useEffect, useState } from "react";

interface MediaPlayerData {
  videoUrl: string;
  loading: boolean;
  error: string | null;
}

const useMediaPlayer = (videoId: string) => {
  const [data, setData] = useState<MediaPlayerData>({
    videoUrl: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(`/media/stream/${videoId}`);
        setData({
          videoUrl: response.data.videoUrl, // Adjust based on your API response
          loading: false,
          error: null,
        });
      } catch (error) {
        setData({
          videoUrl: "",
          loading: false,
          error: "Failed to fetch video stream URL",
        });
      }
    };

    fetchVideoUrl();
  }, [videoId]);

  return data;
};

export default useMediaPlayer;
