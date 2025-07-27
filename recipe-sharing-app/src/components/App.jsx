import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




