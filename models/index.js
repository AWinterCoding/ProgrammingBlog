const User = require("./user");
const Comment = require('./comment');
const BlogPost = require('./blogpost');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Comment, BlogPost };