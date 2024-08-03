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

export { createPost}