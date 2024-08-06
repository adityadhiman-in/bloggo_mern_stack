import express from 'express'
import {createPost, deletePost, getAllPosts, getSinglePost} from '../controllers/post.controller.js';
const router = express.Router();


router.post("/createpost", createPost);
router.get("/getallpost", getAllPosts);
router.get("/getsinglepost", getSinglePost)
router.delete("deletepost", deletePost)

export default router;