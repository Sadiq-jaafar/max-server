import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo.jpeg";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="60px"
        borderRadius="10px"
        margin="10px"
      ></Image>
      <Text fontWeight={"bold"}>Max serve</Text>
    </HStack>
  );
};

export default NavBar;
