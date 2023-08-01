const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const auth = require('../utils/auth');

router.get("/", async (req, res) => {
    try{
        const blogpostData = await BlogPost.findAll({
        //    include: [{model:User, attributes: ['username']},
        // {model: Comment}],
    });
        
        // const blogPosts = blogpostData.map((blogpost) => blogpost.get({plain: true}));
        res.render("homepage", {
            // blogPosts,

        });
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;