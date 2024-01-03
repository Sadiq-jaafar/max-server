import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Video } from "../hooks/useVideo";

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const thumbnailUrl = video.snippet.thumbnails?.medium.url || "";
  return (
    <Card>
      <Image src={thumbnailUrl} alt={video.snippet.title} />
      <CardBody>
        <Heading fontSize="1xl">{video.snippet.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
