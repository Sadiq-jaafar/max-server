import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import VideoGrid from "./components/VideoGrid";
import Categgories from "./components/Categgories";
import { useState } from "react";
import { Categories } from "./hooks/useCategories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );

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
        <GridItem area="aside">
          <Categgories
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <VideoGrid selectedCatigory={selectedCategory} />
      </GridItem>
    </Grid>
  );
};

export default App;
