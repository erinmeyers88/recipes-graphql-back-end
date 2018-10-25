import {GraphQLList} from 'graphql/index';
import {categoryType} from "../../types/category";
import CategoryModel from '../../../models/category';

export default {
  type: new GraphQLList(categoryType),
  resolve() {
    const users = CategoryModel.find().exec();
    if (!users) {
      throw new Error('Error while fetching categories.')
    }
    return users;
  }
}