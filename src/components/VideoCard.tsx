// VideoCard.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Image, Card, CardBody, Heading } from "@chakra-ui/react";
// import { Video } from "../types"; // Assuming you have a Video type
import { Video } from "../hooks/useVideo";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  // const navigateToMediaPlayer = () => {
  //   // You can use React Router to navigate and pass video props
  //   // For example, passing video ID in the URL
  //   // You can modify this based on your actual route structure
  //   // For simplicity, I'm assuming you have a "/media-player/:videoId" route
  //   // Adjust the route and parameters as needed
  //   const videoId = video.id;
  //   window.location.href = `/stream/${videoId}`;
  // };
  const thumbnailUrl = video.thumbnail || "";
  return (
    <Card>
      <Link to={`/stream/${video.id}`}>
        <Image
          w="100%" // Set the width
          h="200px" // Set the height
          objectFit="cover"
          src={thumbnailUrl}
          alt={video.title}
        />
        <CardBody>
          <Heading fontSize="1xl">{video.title}</Heading>
        </CardBody>
      </Link>
    </Card>
    // <Box>
    //   <Link to={`/media-player/${video.id}`}>
    //     <Image
    //       src={video.thumbnailUrl}
    //       alt={video.title}
    //       onClick={navigateToMediaPlayer}
    //     />
    //   </Link>
    //   <Text>{video.title}</Text>
    // </Box>
  );
};

// export default VideoCard;
// interface Props {
//   video: Video;
// }

// const VideoCard = ({ video }: Props) => {
//   const thumbnailUrl = video.thumbnail || "";
//   return (
{
  /* <Card>
  <Link to={`/media-player/${video.id}`}>
    <Image
      w="100%" // Set the width
      h="200px" // Set the height
      objectFit="cover"
      src={thumbnailUrl}
      alt={video.title}
    />
    <CardBody>
      <Heading fontSize="1xl">{video.title}</Heading>
    </CardBody>
  </Link>
</Card>; */
}
//   );
// };

export default VideoCard;
