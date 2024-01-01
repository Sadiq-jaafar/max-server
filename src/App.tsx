import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import VideoGrid from "./components/VideoGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `" nav" " aside main"`,
        lg: `"nav  nav" " aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <VideoGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
