import mongoose, {Schema} from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
}, {collection: 'category', timestamps: true});

export default mongoose.model('category', categorySchema);