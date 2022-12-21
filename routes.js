const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes');

// Get all recipes
router.get('/recipes', recipesController.getRecipes);

// Get a single recipe
router.get('/recipes/:id', recipesController.getRecipe);

// Add a new recipe
router.post('/recipes', recipesController.addRecipe);

// Update a recipe
router.put('/recipes/:id', recipesController.updateRecipe);

// Delete a recipe
router.delete('/recipes/:id', recipesController.deleteRecipe);

module.exports = router;
