import mongoose, { Document, Model, Schema } from 'mongoose';

interface IPost extends Document {
  title: string;
  description: string;
  email: string;
  urlProfile: string;
  id: string;
  name: string;
};

export interface IPostModel extends Model<IPost> {
  findAllByAuthor(id: string): Promise<IPost[]>
}

const postSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  id_user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  urlProfile: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
});

export const Post = mongoose.model<IPost>('Post', postSchema) as IPostModel;