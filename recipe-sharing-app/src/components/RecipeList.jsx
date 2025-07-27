// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  // Automatically filter when search term changes
  React.useEffect(() => {
    filterRecipes();
  }, [searchTerm]);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;

