import useCategories from "../hooks/useCategories";

const Categgories = () => {
  const { categories } = useCategories();
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.snippet.title}</li>
      ))}
    </ul>
  );
};

export default Categgories;
