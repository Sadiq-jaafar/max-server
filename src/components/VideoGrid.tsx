// VideoGrid.tsx

import { SimpleGrid, Text } from "@chakra-ui/react";
import useVideos from "../hooks/useVideo";
import VideoCard from "./VideoCard";

import VideoCardContainer from "./VideoCardContainer";
import VideoCardSkeleton from "./VideoCardSkeleton";
import { Categories } from "../hooks/useCategories";

interface Props {
  selectedCatigory: Categories | null;
}

const VideoGrid = ({ selectedCatigory }: Props) => {
  const { data, error, isLoading } = useVideos(selectedCatigory);

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
            <VideoCardContainer key={skeleton}>
              <VideoCardSkeleton />
            </VideoCardContainer>
          ))}

        {data.map((video) => (
          <VideoCardContainer key={video.id}>
            <VideoCard video={video} />
          </VideoCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default VideoGrid;
