let exportedMethods = {

    async getAllPosts() {

        const schoolName = "Stevens Institute of technology";
        const degree = "Masters In Computer Science";
        const favoriteClass = "Web programming";
        const favoriteMemory = "Navratri Celebrations";
        let newPost = {
            "schoolName": schoolName,
            "degree": degree,
            "favoriteClass": favoriteClass,
            "favoriteMemory": favoriteMemory
        };

        return newPost;
    },



};

module.exports = exportedMethods;