import mongoose from 'mongoose';

const connectWithMongoose = async ()=>{
    try {
     await  mongoose.connect('mongodb+srv://root:pass@bloggodb.3xsp93g.mongodb.net/');
    console.log("connected to database");
    
    } catch (error) {
        console.log(error);
        
    }
}

export default connectWithMongoose;