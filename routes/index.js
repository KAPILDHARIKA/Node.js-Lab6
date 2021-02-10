const postRoutes = require("./about");
const userRoutes = require("./story");
const educationRoutes = require("./education");

const constructorMethod = app => {
    app.use("/about", postRoutes);
    app.use("/story", userRoutes);
    app.use("/education", educationRoutes)

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Not found" });
    });
};

module.exports = constructorMethod;