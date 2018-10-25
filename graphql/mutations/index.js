import recipeMutation from './recipe';
import categoryMutation from './category';

export default {
  ...recipeMutation,
  ...categoryMutation
}