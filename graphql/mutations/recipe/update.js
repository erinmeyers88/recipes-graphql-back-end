import {GraphQLNonNull, GraphQLID} from 'graphql';
import {recipeType, recipeInputType} from "../../types/recipe";
import RecipeModel from '../../../models/recipe';

export default {
  type: recipeType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(recipeInputType)
    }
  },
  resolve(root, params) {
    return RecipeModel.findByIdAndUpdate(params.id, {$set: {...params.data}})
      .then(data => RecipeModel.findById(data.id).exec())
      .catch(err => new Error('Could not update recipe.'))
  }
}