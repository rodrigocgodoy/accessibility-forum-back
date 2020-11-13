import express, { Application, Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';

import connect from "./connect";
import { db } from "./config/config";
import * as PostController from "./controllers/postController";

const app: Application = express();
const port: number = 5000 || process.env.PORT;

connect(db);

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('entrou');
})

app.get("/posts", PostController.allPosts);
// app.get("/posts", async (req: Request, res: Response) => {
//   await Post.find((err: any, posts: any) => {
//     console.log('entrou aqui')
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.send(posts);
//     }
//   });
//   return res.send('Error');
// });

app.get("/posts/:id", PostController.showPost);

app.post("/posts", PostController.addPost);

app.patch("/posts/:id", PostController.updatePost);

app.delete("/posts/:id", PostController.deletePost);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
