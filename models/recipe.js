import mongoose, {Schema} from 'mongoose';

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  categoryId: {
    type: String,
    required: true
  }
}, {collection: 'recipe', timestamps: true});

export default mongoose.model('recipe', recipeSchema);