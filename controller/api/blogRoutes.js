const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
    try {
      console.log(req.body);
      const body = {
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id
      }
      const blogpostData = await BlogPost.create(body);


    res.status(200).json(blogpostData);
} catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;