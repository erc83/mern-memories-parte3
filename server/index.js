import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv"
dotenv.config();

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js'

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes)

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT|| 5500;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);