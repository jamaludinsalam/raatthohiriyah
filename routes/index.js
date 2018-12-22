var express = require("express");
var router  = express.Router();

//Home Routes
router.get("/", function(req, res){
    res.render("index/home");
});

//About 
router.get("/about", function(req, res){
    res.render("index/about");
});

//Gallery
router.get("/gallery", function(req, res){
    res.render("index/gallery");
});

//price
router.get("/price", function(req, res){
    res.render("index/price");
});



module.exports = router;