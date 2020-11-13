import express, { Application, Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

import connect from "./connect";
import { db } from "./config/config";
import * as PostController from "./controllers/postController";

const app: Application = express();
const port: number = 5000 || process.env.PORT;

connect(db);

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/posts", PostController.allPosts);

app.get("/posts/:id", PostController.showPost);

app.post("/posts", PostController.addPost);

app.patch("/posts/:id", PostController.updatePost);

app.delete("/posts/:id", PostController.deletePost);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
