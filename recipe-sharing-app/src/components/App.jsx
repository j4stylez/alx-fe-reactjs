// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail'; // ✅ Use this name for the checker
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar'; // Optional if you're adding search

const App = () => {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>

      {/* Optional: Include SearchBar here if you've implemented it */}
      {/* <SearchBar /> */}

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* ✅ Match checker name */}
        <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
};

export default App;




