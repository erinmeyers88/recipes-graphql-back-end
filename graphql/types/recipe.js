import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

import {categoryType} from './category';

export const recipeType = new GraphQLObjectType({
  name: 'Recipe',
  description: 'Recipe',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: GraphQLString
    },
    ingredients: {
      type: GraphQLString
    },
    instructions: {
      type: GraphQLString
    },
    categoryId: {
      type: GraphQLString
    }
  })
});

export const recipeInputType = new GraphQLInputObjectType({
  name: 'RecipeInput',
  description: 'Recipe Post',
  fields: () => ({
    title: {
      type: GraphQLString
    },
    ingredients: {
      type: GraphQLString
    },
    instructions: {
      type: GraphQLString
    },
    categoryId: {
      type: GraphQLString
    }
  })
});