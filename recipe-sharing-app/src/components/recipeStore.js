import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  
  setSearchTerm: (term) => {
    set((state) => {
      const filtered = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    });
  },
}));


