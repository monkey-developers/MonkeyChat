const { register } = require("../controllers/userControllers");


const router = require("express").Router();

router.post("/register", register)

module.exports = router;