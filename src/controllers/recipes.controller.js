import Recipe from "../models/recipes.model";

export default {
   async createRecipe(req, res) {
    const newData = {};
    const { name, tags, photo, ingredients, instructions, link, creator } = req.body;
    newData.name = `${name[0].toUpperCase()}${name.slice(1)}`;
    newData.tags = tags.split(',');
    newData.photo = photo;
    newData.ingredients = [];
    ingredients.forEach((item, key) => {
      newData.ingredients.push({
        amount: item.amount,
        name: item.name,
        weight: item.weight,
        unit: item.unit
      });
    });
    newData.instructions = instructions;
    newData.link = link;
    newData.creator = creator;
    const recipe = await new Recipe(newData).save();
    return res.status(201).send({data: recipe, message: 'Recipe was created!'});
  },
  
  async findAllRecipes(req, res) {
    const sort_by = {};
        sort_by[req.query.sort_by || 'createdAt'] = req.query.order_by || 'desc';
        const offset = parseInt(req.query.offset) || 0;
        const per_page = parseInt(req.query.per_page) || 2;
        const recipesPromise =
        Recipe.find()
            .skip(offset)
            .limit(per_page)
            .sort(sort_by);
        const countPromise = Recipe.countDocuments();
        const [recipes, count] = await Promise.all([recipesPromise, countPromise]);
        return res.status(200).send({ data: recipes, count });
  },
  
  async findOneRecipe(req, res, next) {
    const recipe = await Recipe.findOne({_id: req.params.id});
    if(!recipe){
      return next();
    } else {
      return res.status(200).send({data: recipe});
    }
  },
  
  async updateRecipe(req, res, next){
    const recipe = await Recipe.findOne(req.id);
    if(!recipe){
      return next();
    } else {
      const { name, tags, photo, ingredients, instructions, link, creator } = req.body;
      recipe.name = `${name[0].toUpperCase()}${name.slice(1)}`;
      recipe.tags = tags.split(',');
      recipe.photo = photo;
      recipe.ingredients = [];
      ingredients.forEach((item, key) => {
        recipe.ingredients.push({
        amount: item.amount,
        name: item.name,
        weight: item.weight,
        unit: item.unit
        });
      });
      recipe.instructions = instructions;
      recipe.link = link;
      recipe.creator = creator;

      await recipe.save();
      return res.status(200).send({data: recipe, message: 'Recipe was updated!'});
    }
  },
  
  async deleteOneRecipe(req, res, next) {
      const recipe = await Recipe.findOne(req.id);
      if(!recipe){
        return next();
      } else {
        await recipe.deleteOne();
        res.status(200).send({message: "Recipe was removed!"})
      }
  },

  async deleteAllRecipes(req, res) {
    const recipes = await Recipe.find().deleteMany({});
    return res.status(200).send({message: "Recipes were removed!"})
  },
}
