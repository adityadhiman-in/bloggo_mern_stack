import express from 'express'
import {createPost, deletePost, getAllPosts, getSinglePost, updatePost} from '../controllers/post.controller.js';
const router = express.Router();


router.post("/createpost", createPost);
router.get("/getallpost", getAllPosts);
router.get("/getsinglepost", getSinglePost);
router.delete("/deletepost", deletePost);
router.put("/updatepost", updatePost);


export default router;