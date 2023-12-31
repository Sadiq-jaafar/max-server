import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.jpeg";
import ColorMode from "./ColorMode"; // Corrected import

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image
        src={logo}
        boxSize="60px"
        borderRadius="10px"
        margin="10px"
      ></Image>

      <ColorMode onClick={() => console.log("toggle color mode")} />
    </HStack>
  );
};

export default NavBar;
