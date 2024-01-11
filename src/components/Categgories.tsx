import { Button, List, ListItem } from "@chakra-ui/react";
import useCategories, { Categories } from "../hooks/useCategories";
interface Props {
  onSelectCategory: (category: Categories) => void;
}

const Categgories = ({ onSelectCategory }: Props) => {
  const { data } = useCategories();
  return (
    <List>
      {data.map((category) => (
        <ListItem key={category.id} paddingY="5px">
          <Button
            fontSize="lg"
            variant="link"
            onClick={() => onSelectCategory(category)}
          >
            {category.snippet.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Categgories;
