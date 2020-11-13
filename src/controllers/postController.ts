import { Request, Response } from "express";
import { Post } from "../models/post";

export const allPosts = async (req: Request, res: Response) => {
  const posts = await Post.find({}).exec();
 
  return res.json(posts);
};

export const showPost = async (req: Request, res: Response) => {
  await Post.findById(req.params.id, (err: any, post: any) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(post);
    }
  }).exec();
  return res.send('Error');
};

export const addPost = async (req: Request, res: Response) => {
  const post = await Post.create(req.body);
  return res.json(post);
};

export const updatePost = async (req: Request, res: Response) => {
  await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, post: any) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(post);
      }
    }
  ).exec();
  return res.send('Error');
};

export const deletePost = async (req: Request, res: Response) => {
  await Post.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Post deleted from database");
    }
  }).exec();

  return res.send('Error');
};