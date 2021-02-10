let exportedMethods = {



    async getAllPosts() {

        const name = "DHARIKA KAPIL";
        const cwid = "10453441";
        const biography = "This information is about me";
        const favoriteShows = "";
        const hobbies = "";
        let newPost = {
            "name": name,
            "cwid": cwid,
            "biography": biography,
            "favoriteShows": favoriteShows,
            "hobbies": hobbies

        };


        return newPost;
    },



};

module.exports = exportedMethods;