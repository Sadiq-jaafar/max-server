import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const VideoCardContainer = ({ children }: Props) => {
  return (
    <Box width="250px" overflow={"hidden"} borderRadius={10}>
      {children}
    </Box>
  );
};

export default VideoCardContainer;
