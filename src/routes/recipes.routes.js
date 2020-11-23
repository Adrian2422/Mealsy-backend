import Router from 'express';
import recipesController from '../controllers/recipes.controller';
import { catchAsync } from '../middlewares/errors';
import validateRecipe from '../middlewares/validators/recipes.validator';

export default () => {
  const api = Router();

  // POST /recipes
  api.post("/recipes", validateRecipe, catchAsync(recipesController.createRecipe));

  // GET /recipes
  api.get("/recipes", catchAsync(recipesController.findAllRecipes));

  // GET /recipes/:id
  api.get("/recipes/:id", catchAsync(recipesController.findOneRecipe));

  // PUT /recipes/:id
  api.put("/recipes/:id", catchAsync(recipesController.updateRecipe));

  // DELETE /recipes/:id
  api.delete("/recipes/:id", catchAsync(recipesController. deleteOneRecipe));

  // DELETE /recipes/
  api.delete("/recipes", catchAsync(recipesController. deleteAllRecipes));
  
  return api;
}