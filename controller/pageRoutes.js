const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const auth = require('../utils/auth');

//base route for the homepage
router.get("/", async (req, res) => {
    try{
        const blogpostData = await BlogPost.findAll({
        //    include: [{model:User, attributes: ['username']},
        // {model: Comment}],
        include: [{model: Comment}]
    });
         const blogPostMap = blogpostData.map((blogpost) => blogpost.get({plain: true}));
        res.render("homepage", {
             blogPostMap,

        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/dashboard", async (req, res) =>{
    try{
        res.render("dashboard", {

        });
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) =>{
    try{
        res.render("login", {});
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;