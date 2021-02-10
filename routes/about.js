const express = require("express");
const router = express.Router();
const data = require("../data");
const aboutData = data.about;

router.get("/:id", async(req, res) => {
    try {
        const post = await aboutData.getPostById(req.params.id);
        res.json(post);
    } catch (e) {
        res.status(404).json({ message: "Post not found" });
    }
});

router.get("/", async(req, res) => {
    try {
        const postList = await aboutData.getAllPosts();
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