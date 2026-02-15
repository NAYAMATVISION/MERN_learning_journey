const express = require('express'); 
const router = express.Router();

module.exports = router;
const User = require('../models/user')


//routes
//CRUD Operations

router.get('/users', async (req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

//create

router.post(
'/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const u1 = await user.save()
        res.json(u1)
    }catch(err){
        res.send('Error')
    }
})

