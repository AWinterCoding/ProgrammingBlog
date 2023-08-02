const router = require("express").Router();
const pageRoutes = require("./pageRoutes");
const apiRoutes = require("./api/index");

router.use("/", pageRoutes);
router.use("/api", apiRoutes);

router.use((req, res) =>{
    res.send("<h1>Wrong Route</h1>")
});

module.exports = router;