const router = require("express").Router();

// finish the required routes
// const apiRoutes =
// const homeRoutes =
// const dashboardRoutes =
const apiRoutes = require("./api");
// const homeRoutes = require("./homeRoutes");
// const dashboardRoutes = require("./dashboardRoutes");

router.use("/api", apiRoutes);
// finish the other needed routes with router.use()

module.exports = router;