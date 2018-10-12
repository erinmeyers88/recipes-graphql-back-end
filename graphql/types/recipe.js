import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

import {CategoryType} from './category';

export const recipeType = new GraphQLObjectType({
  name: 'Recipe',
  description: 'Recipe',
  fields: () => ({
    _id: {
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
    category: {
      type: CategoryType
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
    category: {
      type: CategoryType
    }
  })
});