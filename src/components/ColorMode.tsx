import { HStack, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const ColorMode = ({ onClick }: Props) => {
  const { colorMode, setColorMode } = useColorMode();
  const [status, setStatus] = useState(colorMode === "dark");

  const toggle = () => {
    const newStatus = !status;
    setStatus(newStatus);
    setColorMode(newStatus ? "dark" : "light");
    onClick();
  };

  return (
    <HStack margin="30px">
      {status ? (
        <BsSun size="30px" onClick={toggle} color="yellow.300" />
      ) : (
        <BsMoonStarsFill size="30px" onClick={toggle} color="gray.600" />
      )}
    </HStack>
  );
};

export default ColorMode;
