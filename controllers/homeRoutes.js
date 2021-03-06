const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        const homeData = await Post.findAll({
          include: [ User ] 
           
        });
        res.status(200).json(homeData);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
    try {
        const postData = await Post.findByPk(req.params.id, {
          include: [ User, 
            { model: Comment, include: [ User ] }],
        });
        if (!postData) {
          res.status(404).json({ message: 'No post found with that id!'});
          return;
        }
    
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/login", (req, res) => {
    // login
    if (req.session.logged_in) {
      res.redirect('/login');
      return;
    }
  
    res.render('login');
});

router.get("/signup", (req, res) => {
    // signup
    if (res.session.sign_up) {
      res.redirect('/signup');
      return;
    }
    res.render('signup');
})

module.exports = router;