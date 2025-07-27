// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail'; // ✅ Must exist
import EditRecipeForm from './components/EditRecipeForm'; // Optional if you implemented editing

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
