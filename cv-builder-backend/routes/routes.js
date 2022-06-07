const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');

router.post('/signup', async (req,res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const user = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword,
        records: [],
    })

    user.save()
    .then(data => {
        return res.json({status: "You have signed up successfully", user: data });
    })
    .catch(err => {
        return res.json({status: "error", error: err});
    }) 
})

router.post('/signin', async (req,res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username}).lean();

    if(!user ) {
        return res.json({status: "error", error: "Invalid username/password"});
    }
    if(await bcrypt.compare(password, user.password)) {
        const token = { 
            id: user._id,
            fullName: user.fullName, 
            username: user.username,
            email: user.email,
            password: user.password,
            records: user.records
        
        };
        return res.json({status: "You have signed in successfully", user: token, })
    }
    else {
        return res.json({status: "error", error: "Invalid username/password"});
    }
})

router.get('/users', async (req,res) => {
     User.find({}, function(err,users) {
         if(err) {
             res.send("Error finding users");
        }
            return res.json(users);
    })
})

router.patch('/records:id', async (req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body.records)
    user.save().then(data => {
        if(data) {
            return res.json({status: "Uploaded record", user: data})
        }
        else  {
            return res.json({status: "error", error: "Cannot upload record"})
        }
        
    })
    .catch(err => {
        return res.json({status: "error", error:err})
    })
    
})

module.exports = router;