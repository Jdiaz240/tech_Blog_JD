const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");
// Finish the required pathing for these variables
// const userRoutes = ;
// const postRoutes = ;
// const commentRoutes = ;

router.use("/user", userRoutes);
// write the rest of the router.use routes
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);


module.exports = router;