// MediaStreamingPage.tsx

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { VStack, Heading, Box } from "@chakra-ui/react";

interface MediaFile {
  id: string;
  type: string;
}

const MediaStreamingPage: React.FC = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  // Replace this function with your actual API fetch function
  const fetchMediaData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/media");
      setMediaFiles(response.data.data);
    } catch (error) {
      console.error("Error fetching media data:", error);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, []);

  const getMediaUrl = (id: string, type: string) =>
    `http://localhost:9000/api/media/stream/${id}`;

  return (
    <VStack spacing={4} align="center">
      <Heading size="xl">Media Streaming Page</Heading>
      <Box>
        {mediaFiles.map((mediaFile, index) => (
          <Box key={index} mb="4" p="4" borderWidth="1px" borderRadius="lg">
            {mediaFile.type === "image" ? (
              <img
                src={getMediaUrl(mediaFile.id, mediaFile.type)}
                alt={`Media ${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <ReactPlayer
                url={getMediaUrl(mediaFile.id, mediaFile.type)}
                controls
                width="100%"
                height="auto"
              />
            )}
          </Box>
        ))}
      </Box>
    </VStack>
  );
};

export default MediaStreamingPage;
