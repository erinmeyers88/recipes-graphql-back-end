import {GraphQLList} from 'graphql/index';
import {recipeType} from "../../types/recipe";
import RecipeModel from '../../../models/recipe';

export default {
  type: new GraphQLList(recipeType),
  resolve() {
    const users = RecipeModel.find().exec();
    if (!users) {
      throw new Error('Error while fetching recipes.')
    }
    return users;
  }
}