import {
  GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList
} from 'graphql';

import {recipeType} from '../types/recipe';
import RecipeModel from '../../models/recipe';

export const categoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Category',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    recipes: {
      type: GraphQLList(recipeType),
      resolve(category) {
        const {id} = category;
        return RecipeModel.find({categoryId: id}).exec();
      }
    }
  })
});

export const categoryInputType = new GraphQLInputObjectType({
  name: 'CategoryInput',
  description: 'Category Post',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
});
