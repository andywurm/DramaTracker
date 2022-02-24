const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const app = express();
const PORT = process.env.PORT||5000;
const { Content } = db;

const database = require('./data/Database.js');



// this lets us parse 'application/json' content in http requests
app.use(express.json());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });
  
// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: true }).then(async( ) =>  {
  console.log(database);
  database.forEach(async(e) => {
   await Content.create({
     genre: e.genre.join(" "),
     cast: e.cast.join(" "),
     title: e.title,
     description: e.description,
     photo: e.photo,
     media: e.type
    });
  })
});


// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}
