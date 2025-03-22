import mongoose from "mongoose";

export const connectDB = async () => {
  const mongodbUrl = process.env.MONGODB_URL;
  const instance = await mongoose.connect(mongodbUrl);
  console.log(`MongoDB Connected: ${instance.connection.host}`);
};
