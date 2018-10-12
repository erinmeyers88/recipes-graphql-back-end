import {
  GraphQLEnumType
} from 'graphql';

export const CategoryType = new GraphQLEnumType({
  name: 'Category',
  values: {
    SIDE: {value: 'side'},
    MAIN: {value: 'main'},
    DESSERT: {value: 'dessert'}
  }
});

