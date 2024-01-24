// MediaPlayer.tsx

// import React from "react";
import { useParams } from "react-router-dom";
import { Center, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import useVideoPlayer from "../hooks/useVideoPlayer";

const MediaPlayer = () => {
  const { id } = useParams<{ id: string }>();
  const { videoUrl, loading, error } = useVideoPlayer(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!videoUrl) {
    return <div>Video stream URL not available</div>;
  }

  return (
    <Center height="100vh" flexDirection="column">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        YouTube-like Media Player
      </Text>
      <ReactPlayer
        url={videoUrl}
        controls
        width="80%"
        height="60vh"
        style={{ margin: "auto" }}
      />
    </Center>
  );
};

export default MediaPlayer;
