// VideoCard.tsx

import React from "react";
import { Link } from "react-router-dom";
import { Image, Card, CardBody, Heading } from "@chakra-ui/react";
import { Video } from "../hooks/useVideo";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const thumbnailUrl = video.thumbnail || "";

  return (
    <Card>
      <Link to={`/stream/${video.id}`}>
        <Image
          w="100%"
          h="200px"
          objectFit="cover"
          src={thumbnailUrl}
          alt={video.title}
        />
        <CardBody>
          <Heading fontSize="1xl">{video.title}</Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

export default VideoCard;
