const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    // we want to go ahead and finishing the routing to get all the posts
    try {
        const dashboardData = await Dashboard.findAll({ 
            include: []
      });
      res.status(200).json(dashboardData);
    } catch (err) {
      res.status(500).json(err);
      }
});

router.get("/new", withAuth, (req, res) => {
// for showing new posts to the user
    try {
        const newData = await New.findByPk(req.params.id, {
        include: [ Product ]
        });

        if (!newData) {
        res.status(404).json({ message: 'No user found with this id'});
        return;
        }

        res.status(200).json(newData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
    try {
        const postData = await Category.findByPk(req.params.id, {
          include: [ Product ]
        });
    
        if (!postData) {
          res.status(404).json({ message: 'No category found with this id'});
          return;
        }
    
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;