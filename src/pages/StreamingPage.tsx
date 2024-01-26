// MediaStreamingPage.tsx

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import { VStack, Heading, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

interface MediaFile {
  id: string;
  title: string;
  description: string;
  type: string;
  thumbnail: string;
  duration: string;
  channel_id: string;
  publishedAt: string;
}

const MediaStreamingPage: React.FC = () => {
  const [mediaFile, setMediaFile] = useState<MediaFile | null>(null);
  const { id = "" } = useParams<{ id?: string }>();

  // Replace this function with your actual API fetch function
  const fetchMediaData = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:9000/api/media/${id}`);
      setMediaFile(response.data.data);
    } catch (error) {
      console.error("Error fetching media data:", error);
    }
  };

  useEffect(() => {
    fetchMediaData(id);
  }, [id]);

  const getMediaUrl = (id: string) =>
    `http://localhost:9000/api/media/stream/${id}`;

  return (
    <VStack spacing={4} align="center">
      <Heading size="xl">Media Streaming Page</Heading>
      <Box>
        {mediaFile ? (
          <Box mb="4" p="4" borderWidth="1px" borderRadius="lg">
            {mediaFile.type === "image" ? (
              <img
                src={getMediaUrl(mediaFile.id)}
                alt={mediaFile.title}
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <ReactPlayer
                url={getMediaUrl(mediaFile.id)}
                controls
                width="100%"
                height="auto"
                playing // Enable autoplay
              />
            )}
          </Box>
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </VStack>
  );
};

export default MediaStreamingPage;
