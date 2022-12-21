const Recipe = require('../models/recipe');

// Add a new recipe
exports.addRecipe = (req, res) => {
  const newRecipe = new Recipe(req.body);
  newRecipe.save((err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.json(recipe);
    }
  });
};

// Get a list of all recipes
exports.getRecipes = (req, res) => {
  Recipe.find((err, recipes) => {
    if (err) {
      res.send(err);
    } else {
      res.json(recipes);
    }
  });
};

// Get the details of a specific recipe
exports.getRecipe = (req, res) => {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.json(recipe);
    }
  });
};

// Update a recipe
exports.updateRecipe = (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.json(recipe);
    }
  });
};

// Delete a recipe
exports.deleteRecipe = (req, res) => {
  Recipe.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Recipe successfully deleted' });
    }
  });
};
