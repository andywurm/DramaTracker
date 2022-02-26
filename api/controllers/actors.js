const express = require('express');
const router = express.Router();
const db = require('../models');
const { Actor } = db;


// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
  Actor.findAll({})
    .then(actors => res.json(actors));
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Actor.findByPk(id)
    .then(actor => {
      if(!actor) {
        return res.sendStatus(404);
      }
      res.json(actor);
    });
});



module.exports = router;