import {GraphQLNonNull, GraphQLID} from 'graphql';
import {categoryType} from "../../types/category";
import CategoryModel from '../../../models/category';

export default {
  type: categoryType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedUser = CategoryModel.findByIdAndRemove(params.id).exec();
    if (!removedUser) {
      throw new Error('Error removing category.');
    }
    else return removedUser;
  }
}