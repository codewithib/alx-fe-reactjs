import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

  setSearchTerm: (term) => set((state) => {
    const filteredRecipes = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),

  filteredRecipes: [],

  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    };
  }),
}));

export default useRecipeStore;
