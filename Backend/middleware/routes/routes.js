const express = require('express')
const router = express.Router()



//middlewares
const auth = function(req, res, next){
    console.log("authenticating...");

    req.user = {userId:1 , role:"Admin"}

    if(req.user){


        next();
    }
    else{
        res.json(
            {
                success : false,
                message:"Not a valid user",

            })
    }
}

const isStudent = function(req, res, next){
    console.log("checking if student...");
    if(req.user.role == "Student"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied"
        })
    }
}

const isAdmin = function(req, res, next){
    console.log("checking if admin...");
    if(req.user.role == "Admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied, this route is only for Admins"
        })
    }
}



//routes
router.get('/student', auth,isStudent, (req, res) => {
   console.log("I m in student route");
   res.send("Welcome Student");
})

router.get('/admin', auth, isAdmin, (req, res) => {
    console.log("I m in admin route");
    res.send("Welcome Admin");
 })






module.exports = router