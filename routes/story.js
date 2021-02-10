const express = require("express");
const router = express.Router();
const data = require("../data");
const storyData = data.story;

router.get("/:id", async(req, res) => {
    try {
        const user = await storyData.getUserById(req.params.id);
        res.json(user);
    } catch (e) {
        res.status(404).json({ message: "not found!" });
    }
});

router.get("/", async(req, res) => {
    try {
        const userList = await storyData.addStory();
        res.json(userList);
    } catch (e) {
        // Something went wrong with the server!
        res.status(500).send();
    }
});

router.post("/", async(req, res) => {
    // Not implemented
    res.status(501).send();
});

module.exports = router;