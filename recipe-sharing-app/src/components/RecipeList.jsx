import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const toggleFavorite = (id) => {
    favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
  };

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;



