import {GraphQLID, GraphQLNonNull} from 'graphql/index';
import {recipeType} from '../../types/recipe';
import RecipeModel from '../../../models/recipe';

export default {
  type: recipeType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return RecipeModel.findById(params.id).exec();
  }
}