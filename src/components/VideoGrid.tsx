// VideoGrid.tsx

// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useVideos from "../hooks/useVideo";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";
import VideoCardContainer from "./VideoCardContainer";
import VideoCardSkeleton from "./VideoCardSkeleton";
// import { Categories } from "../hooks/useCategories";

interface Props {
  selectedCatigory: string | null;
}

const VideoGrid = ({ selectedCatigory }: Props) => {
  const { data, error, isLoading } = useVideos();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const filteredVideos = selectedCatigory
    ? data.filter((video) => video.type === selectedCatigory)
    : data;

  return (
    <Router>
      <>
        {error && <Text>{error}</Text>}
        <Routes>
          <Route path="media/stream?id=`${videoId}`" element={<VideoPlayer />} />
          <Route
            path="/"
            element={
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                spacing={10}
              >
                {isLoading &&
                  skeletons.map((skeleton) => (
                    <VideoCardContainer key={skeleton}>
                      <VideoCardSkeleton />
                    </VideoCardContainer>
                  ))}
                {filteredVideos.map((video) => (
                  <VideoCardContainer key={video.id}>
                    <VideoCard video={video} />
                  </VideoCardContainer>
                ))}
              </SimpleGrid>
            }
          />
        </Routes>
      </>
    </Router>
  );
};

export default VideoGrid;
