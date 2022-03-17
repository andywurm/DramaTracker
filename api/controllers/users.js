const express = require('express');
const router = express.Router();
const db = require('../models');
const { Content, User } = db;


router.post('/sign', async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        console.log(user);
        res.status(200).json({ value: "successfully created user" });
    } catch (e) {
        res.status(400).json({ value: "error creating user" });
    }
});

router.post('/log', async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
                
            }
        }
        );

         

        console.log(user);
        if(user !== null){
            res.status(200).json({ value: user });
        } else{
            res.status(400).json({ value: "Login error" });
        }

    } catch (e) {
        res.status(400).json({ value: "Login error" });
    }

    
});



module.exports = router;