const sequelize = require("./config/connection");
const {User, Comment, BlogPost} = require("./models");

const userJson = require("./seeds/User.json");
const blogJson = require('./seeds/BlogPost.json');
const commentJson = require('./seeds/Comment.json');

const seedDatabase = async () =>{
    await sequelize.sync({force: false});

    await User.bulkCreate(userJson, {
        individualHooks: true,
        returning: true,
    });
    await BlogPost.bulkCreate(blogJson, {
        individualHooks: true,
        returning: true,
    });
    await Comment.bulkCreate(commentJson, {
        individualHooks: true,
        returning: true
    });
    process.exit(0);
}

seedDatabase();