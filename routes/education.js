const express = require("express");
const router = express.Router();
const data = require("../data");
const educationData = data.education;

router.get("/:id", async(req, res) => {
    try {
        const post = await educationData.getPostById(req.params.id);
        res.json(post);
    } catch (e) {
        res.status(404).json({ message: "Post not found" });
    }
});

router.get("/", async(req, res) => {
    try {
        const postList = await educationData.getAllPosts();
        res.json(postList);
    } catch (e) {
        res.status(500).send();
    }
});

router.post("/", async(req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;