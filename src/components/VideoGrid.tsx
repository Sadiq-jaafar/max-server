// VideoGrid.tsx

import { Text } from "@chakra-ui/react";
import useVideos from "../hooks/useVideo";

const VideoGrid = () => {
  const { videos, error } = useVideos();

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
