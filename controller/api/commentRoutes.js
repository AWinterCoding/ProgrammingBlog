const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      if(req.session.logged_in){
      const options = {
        content: req.body.content,
        blogpost_id: req.body.blogpost_id,
        user_id: req.sessionID.user_id
      }
      const commentData = await Comment.create(options);

    res.status(200).json(commentData);
    }else{
      res.status(400).json({message: "You need to be logged in"})
    }
} catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;