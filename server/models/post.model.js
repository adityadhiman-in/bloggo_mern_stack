import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    topic: {
        type: String,
    },
    question: {
        type: String,

    },
    answer: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Post', postSchema);