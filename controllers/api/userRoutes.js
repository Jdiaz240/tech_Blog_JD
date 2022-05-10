const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    // Creating a new instance of user
   try {
       const userData = await User.create(req.body);
       res.status(200).json(userData);
   } catch (err) {
       res.status(400).json(err);
   }
});

router.post("/login", async (req, res) => {
    // User login
    try {
        const loginData = await Login.use(req.body);
        res.status(200).json(loginData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/logout", async (req, res) => {
    // User logout
    try {
        const logoutData = await Logout.create(req.body);
        res.status(200).json(logoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;