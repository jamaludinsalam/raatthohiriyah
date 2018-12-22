var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    methodOverride  = require("method-override");

var indexRoutes     = require("./routes/index");

//Databases    
mongoose.connect("mongodb://localhost:27017/raatthohiriyah", {useNewUrlParser: true});
var port = process.env.PORT || 3000;

//App
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

//Routes
app.use("/", indexRoutes);

app.listen(port, process.env.IP, function(){
    console.log("Server was started on port: " + port );
});
