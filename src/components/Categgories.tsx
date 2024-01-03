import useCategories from "../hooks/useCategories";

const Categgories = () => {
  const { data } = useCategories();
  return (
    <ul>
      {data.map((category) => (
        <li key={category.id}>{category.snippet.title}</li>
      ))}
    </ul>
  );
};

export default Categgories;
