const express = require('express');
const router = express.Router();
const db = require('../models');
const { Content, User, Actor } = db;
const passport = require('../middlewares/authentication');



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

router.post('/update', async (req, res) => {
    console.log(req.body);
    try {
        const updatedUser = await User.update(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password
            },
            {
                where: {
                    username: req.body.username
                }
            }
        )
        const person = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        res.status(200).json({ value: person });
    } catch (e) {
        res.status(400).json({ value: "error saving information" });
    }

})

// router.post('/log', async (req, res) => {
//     try {
//         console.log(req.body);
//         const user = await User.findOne({
//             where: {
//                 username: req.body.username,
//                 password: req.body.password

//             }
//         }
//         );

//         console.log(user);
//         if (user !== null) {
//             res.status(200).json({ value: user });
//         } else {
//             res.status(400).json({ value: "Login error" });
//         }

//     } catch (e) {
//         res.status(400).json({ value: "Login error" });
//     }


// });

router.post('/log',
    passport.authenticate('local'),
    (req, res) => {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.json(req.user);
    });

router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logout successful' });
})

router.get("/check", (req, res) => {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.status(400).json({ error: "Not authenticated" });
    }
});

router.get('/list', async (req, res) => {

    const user = await User.findOne({
        where: {
            username: req.query.username
        }
    })

    const findWatched = await Content.findAll({
        include: [{
            model: User,
            attributes: ['id'],
            where: {
                id: user.id
            },

        },
        {
            model: Actor,
            attributes: ['name'],
        }]

    })

    res.status(200).json({ value: findWatched });

});



router.post('/add', async (req, res) => {

    const user = await User.findOne({
        where: {
            id: req.body.userId
        }
    })

    const content = await Content.findOne({
        where: {
            id: req.body.contentId
        }
    })

    const found = await user.addContent(content, { through: { listType: req.body.listType } })

    res.status(200).json({ value: found });


});

module.exports = router;