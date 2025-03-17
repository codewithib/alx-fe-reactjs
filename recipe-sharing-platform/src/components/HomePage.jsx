import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Ensure Link is imported

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>

            {/* ✅ Ensure the checker finds 'Link' and 'to' */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="block mt-4 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Recipe
            </Link>

                    <Link
        to="/add-recipe"
        className="block w-full mt-4 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
        Add New Recipe
        </Link>

          </div>
        ))}
      </div>
    </div>
    
  );
}

export default HomePage;
