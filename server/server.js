//Imports
import express from 'express';
import PostRoute from './routes/routes.js';
import connectWithMongoose from './db/connection1.db.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectWithMongoose();
app.use(cors({
    origin: ["http://localhost:3000"]
}));

//Middlewares
app.use(express.json())
app.use("/", PostRoute);
app.use(express.urlencoded({extended: true}))

app.listen(port, ()=>{
    console.log(`server running on port http://localhost:${port}`);
});