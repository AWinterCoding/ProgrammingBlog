const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
    });
    res.status(200).json(userData);
} catch (err) {
      res.status(400).json(err);
    }
  });

  //login api request
  router.post("/login", async (req, res) =>{
    try{
        const userJson = await User.findOne({where: {username: req.body.username, password: req.body.password}});
        if(!userJson){
            res.status(400).json({message: "Incorrect email or password, try again"});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userJson.id;
            req.session.logged_in = true;
            res.json({ message: "You are now logged in"});
        });
    }catch(err){
        res.status(500).json(err);
    }
});

//logout api call
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.json({message: "You are already logged out"});
    }
  });
  module.exports = router;