import PostSchema from '../models/post.model.js';

const createPost = async (req, res )=>{
    const {topic, question, answer} = req.body;
    const responseData = await PostSchema.create({
        topic,
        question,
        answer
    });
    res.send({
        success: true,
        responseData
    })
}
const getAllPosts = async (req, res )=>{
    const responseData = await PostSchema.find();
    res.send({
        success: true,
        responseData
    })
}
const getSinglePost = async (req, res )=>{
    const {postID} = req.query;
    const responseData = await PostSchema.findById(postID);
    res.send({
        success: true,
        responseData
    })
}
const deletePost = async (req, res )=>{
    const {postID} = req.body;
    const responseData = await PostSchema.findByIdAndDelete(postID);
    res.send({
        success: true,
        responseData
    })
}

export { createPost, getAllPosts, getSinglePost, deletePost}