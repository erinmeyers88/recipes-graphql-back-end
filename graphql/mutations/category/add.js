import {GraphQLNonNull} from 'graphql';
import {categoryType, categoryInputType} from "../../types/category";
import CategoryModel from '../../../models/category';

export default {
  type: categoryType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(categoryInputType)
    }
  },
  resolve(root, params) {
    const rModel = new CategoryModel(params.data);
    const newRecipe = rModel.save();
    if(!newRecipe) {
      throw new Error('Error adding category.');
    }
    return newRecipe;
  }
}