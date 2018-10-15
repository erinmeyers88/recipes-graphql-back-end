import {GraphQLNonNull, GraphQLID} from 'graphql';
import {recipeType} from "../../types/recipe";
import RecipeModel from '../../../models/recipe';

export default {
  type: recipeType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedUser = RecipeModel.findByIdAndRemove(params.id).exec();
    if (!removedUser) {
      throw new Error('Error removing recipe.');
    }
    else return removedUser;
  }
}