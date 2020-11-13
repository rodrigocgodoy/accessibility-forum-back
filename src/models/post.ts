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
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  urlProfile: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

postSchema.static("findAllByAuthor", (author: string) => {
  return Post
    .find({ author: author })
    .lean()
    .exec();
});

export const Post = mongoose.model<IPost>('Post', postSchema) as IPostModel;