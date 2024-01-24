import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.jpeg";
import ColorMode from "./ColorMode"; // Corrected import
import SearchInput from "./SearchInput";

const NavBar = () => (
  // <HStack>
  <HStack padding="10px">
    <Image src={logo} boxSize="60px" borderRadius="10px" margin="10px"></Image>
    <SearchInput />

    <ColorMode onClick={() => console.log("toggle color mode")} />
  </HStack>
);

export default NavBar;
