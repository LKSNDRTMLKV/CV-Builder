const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');




router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const existingUsername = await User.findOne({ username: req.body.username });
  
   
        const user = new User({
            fullName: req.body.fullName,
            username: req.body.username,
            email: req.body.email,
            password: securePassword
        });

      

        await user.save();

        const token = {
            id: user._id,
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            // password: securePassword,
            records: user.records
        }

        try {
                return res.json({ status: "You have signed up successfully", user: token });
        }
        catch {
            return res.json({ status: 400, error: "An error occured" });
        }
    


})

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).lean();

    if (!user) {
        return res.json({ status: 404, error: "Invalid username/password" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = {
            id: user._id,
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            // password: user.password,
            records: user.records

        };
        return res.json({ status: "You have signed in successfully", user: token, })
    }
    else {
        return res.json({ status: 404, error: "Invalid username/password" });
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users)
    }
    catch {
        return res.json({ status: 404, error: "Error finding users" })
    }
})

router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const token = {
            id: user._id,
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            password: user.password,
            records: user.records

        };
        return res.json(token)
    } catch {
        return res.json({ status: 404, error: "User is not found!" })
    }

})

router.patch('/user', async (req, res) => {
    const { id, fullName, username, email, password } = req.body;

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, saltPassword)


    try {
        const token = await User.findByIdAndUpdate(
            id,
            {
                $set: {
                    fullName: fullName,
                    username: username,
                    email: email,
                    password: securePassword,
                }
            },
            { new: true }
        );
        return res.json({ status: "Changes were made successfully", user: token });
    }
    catch {
        return res.json({ status: 404, error: "User is not found!" })
    }

})

router.delete('/user/:id', async (req, res) => {
    const { password } = req.body;
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        // if(!user) {
        //     return res.json({status:404, error:"User is not found!"})
        // }
        if (await bcrypt.compare(password, user.password)) {
            return res.json({ status: "User has been deleted!" })
        }

        return res.json({ status: "Incorrect password" })


    }
    catch {
        return res.json({ status: 404, error: "User is not found!" })
    }
})

// router.patch('/account/:id', async (req,res) => {
//     // const user = await User.findByIdAndUpdate(req.params.id, req.body.records)
//     // user.save().then(data => {
//     //     if(data) {
//     //         return res.json({status: "Uploaded record", user: data})
//     //     }
//     //     else  {
//     //         return res.json({status: "error", error: "Cannot upload record"})
//     //     }

//     // })
//     // .catch(err => {
//     //     return res.json({status: "error", error:err})
//     // })
//     try {
//         const user = await User.findById(req.params.id);
//         Object.assign(user, req.body);
//         user.save();
//         res.send({data: true})
//     }
//     catch {
//         res.send("Error finding user");
//     }


// })



module.exports = router;