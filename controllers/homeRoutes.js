const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        const homeData = await HomePage.findAll({
          include: [ Category, 
            { model: Tag, through: ProductTag }],
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
          include: [ Category, 
            { model: Tag, through: ProductTag }],
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
});

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;