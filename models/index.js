const User = require("./user");
const Comment = require('./comment');
const BlogPost = require('./blogpost');

User.hasMany(BlogPost, {

});

BlogPost.hasMany(Comment, {

});

module.exports = { User, Comment, BlogPost };