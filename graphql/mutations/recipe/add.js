import {GraphQLNonNull} from 'graphql';
import {recipeType, recipeInputType} from "../../types/recipe";
import RecipeModel from '../../../models/recipe';

export default {
  type: recipeType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(recipeInputType)
    }
  },
  resolve(root, params) {
    const rModel = new RecipeModel(params.data);
    const newRecipe = rModel.save();
    if(!newRecipe) {
      throw new Error('Error adding recipe.');
    }
    return newRecipe;
  }
}