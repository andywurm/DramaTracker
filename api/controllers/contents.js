const express = require('express');
const router = express.Router();
const db = require('../models');
const { Content, Actor } = db;

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


router.get('/', (req, res) => {
  Content.findAll({
    include: {
      model: Actor,
      attributes: ['name'],
    },
  })
    .then(contents => res.json(contents));
});

router.get('/shows', (req, res) => {
  Content.findAll({
    include: {
      model: Actor,
      attributes: ['name'],
    },
    where: {
      media: 'show'
    }
  })
    .then(shows => res.json(shows));
})

router.get('/movies', (req, res) => {
  Content.findAll({
    include: {
      model: Actor,
      attributes: ['name'],
    },
    where: {
      media: 'movie'
    }
  })
    .then(movies => res.json(movies));
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Content.findByPk(id)
    .then(content => {
      if (!content) {
        return res.sendStatus(404);
      }

      res.json(content);
    });
});



module.exports = router;