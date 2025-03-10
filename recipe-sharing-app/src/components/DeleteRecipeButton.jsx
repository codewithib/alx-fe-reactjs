import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)} style={{ marginTop: "10px" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
