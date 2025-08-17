import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }
    const ingredientList = formData.ingredients
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item);
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'At least two ingredients are required';
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate adding recipe to data.json (in a real app, this would be an API call)
      console.log('New Recipe:', {
        id: Date.now(), // Temporary ID
        title: formData.title,
        summary: formData.title, // Placeholder summary
        image: 'https://via.placeholder.com/300', // Placeholder image
        ingredients: formData.ingredients
          .split('\n')
          .map((item) => item.trim())
          .filter((item) => item),
        instructions: formData.instructions
          .split('\n')
          .map((item) => item.trim())
          .filter((item) => item),
      });
      // Reset form
      setFormData({ title: '', ingredients: '', instructions: '' });
      setErrors({});
      // Navigate back to home page
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:text-blue-600 font-semibold"
      >
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Add New Recipe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold mb-2"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter one ingredient per line"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions Field */}
        <div className="mb-6">
          <label
            htmlFor="instructions"
            className="block text-gray-700 font-semibold mb-2"
          >
            Preparation Steps (one per line)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="5"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.instructions ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter one step per line"
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;