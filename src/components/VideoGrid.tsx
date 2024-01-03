// VideoGrid.tsx

import { SimpleGrid, Text } from "@chakra-ui/react";
import useVideos from "../hooks/useVideo";
import VideoCard from "./VideoCard";

import VideoCardContainer from "./VideoCardContainer";
import VideoCardSkeleton from "./VideoCardSkeleton";

const VideoGrid = () => {
  const { data, error, isLoading } = useVideos();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <VideoCardContainer>
              <VideoCardSkeleton key={skeleton} />
            </VideoCardContainer>
          ))}

        {data.map((video) => (
          <VideoCardContainer>
            <VideoCard key={video.id} video={video} />
          </VideoCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default VideoGrid;
