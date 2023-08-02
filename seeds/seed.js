const sequelize = require("../config/connection");
const {User, Comment, BlogPost} = require("../models");

const userJson = require("./User.json");
// const commentJSON = require("./Comment.json");
// const blogpostJSON = require("./BlogPost.json");

const seedDatabase = async () =>{
    await sequelize.sync({force: false});

    await User.bulkCreate(userJson, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase();