import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-700 mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mt-6 text-gray-800">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-gray-800">
          Instructions
        </h2>
        <ol className="list-decimal list-inside text-gray-600 mt-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mt-1">
              {step}
            </li>
          ))}
        </ol>

        <Link
          to="/"
          className="block mt-6 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
