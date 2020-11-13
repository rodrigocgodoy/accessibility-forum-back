import mongoose from "mongoose";

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => {
        return console.log(`Successfully connected to ${db}`);
      })
  };
  connect();
};