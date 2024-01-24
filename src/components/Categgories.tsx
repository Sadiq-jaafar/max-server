import { Button, List, ListItem } from "@chakra-ui/react";
interface Props {
  onSelectCategory: (category: string) => void;
}

// const onSelectCategory = (category: string) => {
//   console.log(category);
// };

const Categgories = ({ onSelectCategory }: Props) => {
  // const { data } = useCategories();
  return (
    <List>
      {/* {data.map((category) => ( */}
      <ListItem paddingY="5px">
        <Button
          fontSize="lg"
          variant="link"
          onClick={() => onSelectCategory("")}
        >
          All
          {/* {category.snippet.title} */}
        </Button>
      </ListItem>
      <ListItem paddingY="5px">
        <Button
          fontSize="lg"
          variant="link"
          onClick={() => onSelectCategory("video")}
        >
          Video
          {/* {category.snippet.title} */}
        </Button>
      </ListItem>
      <ListItem paddingY="5px">
        <Button
          fontSize="lg"
          variant="link"
          onClick={() => onSelectCategory("audio")}
        >
          Audio
          {/* {category.snippet.title} */}
        </Button>
      </ListItem>
      <ListItem paddingY="5px">
        <Button
          fontSize="lg"
          variant="link"
          onClick={() => onSelectCategory("document")}
        >
          Documents
          {/* {category.snippet.title} */}
        </Button>
      </ListItem>
      <ListItem paddingY="5px">
        <Button
          fontSize="lg"
          variant="link"
          onClick={() => onSelectCategory("image")}
        >
          Images
          {/* {category.snippet.title} */}
        </Button>
      </ListItem>
      <ListItem paddingY="5px">
        <Button
          fontSize="lg"
          variant="link"
          onClick={() => onSelectCategory("archive")}
        >
          Archives
          {/* {category.snippet.title} */}
        </Button>
      </ListItem>
      {/* ))} */}
    </List>
  );
};

export default Categgories;
