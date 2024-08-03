//Imports
import express from 'express';
import PostRoute from './routes/post.route.js';
import connectWithMongoose from './db/connection1.db.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectWithMongoose();

//Middlewares
app.use(express.json())
app.use("/", PostRoute);
app.use(express.urlencoded({extended: true}))

app.listen(port, ()=>{
    console.log(`server running on port http://localhost:${port}`);
});