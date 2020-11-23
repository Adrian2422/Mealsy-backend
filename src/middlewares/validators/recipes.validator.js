import { isURL } from 'validator'
import { isValidObjectId } from "mongoose";

export default function validateRecipe(req, res, next) {
  const newData = {};
  const validData = [];
  const { name, tags, photo, ingredients, instructions, link, creator } = req.body;
  // validate name
  newData.name = `${name[0].toUpperCase()}${name.slice(1)}`;
  validData.push(name.length <= 50);
  // validate tags
  newData.tags = tags.split(",");
  validData.push(tags.split(",").length <= 5);
  // validate photo link 
  if(photo.length > 0){
    validData.push(photo.match(/\.(jpeg|jpg|gif|png)$/) != null);
  } else {
    validData.push(true);
  }
  newData.photo = photo.length ? photo : null;
  // validate ingredients
  newData.ingredients = [];
  if (ingredients.length > 0 || typeof ingredients === 'array') {
    ingredients.forEach((item, key) => {
      newData.ingredients.push({
        amount: item.amount,
        name: item.name,
        weight: item.weight,
        unit: item.unit,
      });
    });
    validData.push(true);
  } else {
    validData.push(false);
  }
  // validate instructions
  newData.instructions = instructions;
  validData.push(instructions.length > 0);
  // validate link
  if (link.length > 0) {
    const options = {
      protocols: ["http", "https"],
      require_protocol: true,
      require_valid_protocol: true,
    };
    validData.push(isURL(link));
  } else {
    validData.push(true);
  }
  newData.link = link.length ? link : null;
  // validate creator
  validData.push(isValidObjectId(creator));
  newData.creator = creator;
  // check if any validation was failed
  req.engravedData = validData.includes(false) ? {} : { ...newData };
  next();
}
