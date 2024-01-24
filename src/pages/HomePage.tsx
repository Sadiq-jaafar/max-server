// import React, { useState } from "react";
import { Grid, Show, GridItem, Heading } from "@chakra-ui/react";
import Categgories from "../components/Categgories";
import VideoGrid from "../components/VideoGrid";
import { useState } from "react";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"aside main"`,
          lg: `"aside main"`,
        }}
      >
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

      <Heading>homepage</Heading>
    </>
  );
};

export default HomePage;
