const { route } = require("../../../.Main/controllers/api");

const router = require("express").Router();
const userRoutes = require("");
const postRoutes = require("");
const commentRoutes = require("");
// Finish the required pathing for these variables
// const userRoutes = ;
// const postRoutes = ;
// const commentRoutes = ;

router.use("/user", userRoutes);
// write the rest of the router.use routes
router.use("/", postRoutes);
router.use("/", commentRoutes);

module.exports = router;