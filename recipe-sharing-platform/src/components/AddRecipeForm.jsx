import { useState } from "react";

function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value; // Explicitly using target.value
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // Validate form inputs
  const validateForm = () => {
    let newErrors = {};

    if (!recipe.title.trim()) newErrors.title = "Title is required";
    if (!recipe.ingredients.trim()) {
      newErrors.ingredients = "At least one ingredient is required";
    } else if (recipe.ingredients.split(",").length < 2) {
      newErrors.ingredients = "Enter at least two ingredients (comma-separated)";
    }
    if (!recipe.steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Recipe submitted:", recipe);
      alert("Recipe added successfully!");
      setRecipe({ title: "", ingredients: "", steps: "" });
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-semibold">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold">Ingredients (comma-separated)</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
            placeholder="E.g., Flour, Sugar, Eggs"
            rows="2"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-semibold">Preparation Steps</label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-1 focus:ring-2 focus:ring-blue-400"
            placeholder="Describe the cooking steps"
            rows="4"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
