let exportedMethods = {

    async addStory() {

        const storyTitle = "My First day in United States";
        const story = "This includes the story for my first day in United States";
        let newUser = {
            "storyTitle": storyTitle,
            "story": story
        };


        return newUser
    },


};

module.exports = exportedMethods;