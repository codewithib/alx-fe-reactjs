import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import routing components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails'; // ✅ Import RecipeDetails

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes> {/* ✅ Wrap routes inside <Routes> */}
          <Route path="/" element={<RecipeList />} /> {/* ✅ Define main page route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* ✅ Define recipe detail route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
