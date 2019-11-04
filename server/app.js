'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(session({
  secret: 'r5tbdWNE$meKuizHxsQUMauL2r9uiHnhuhQ4eD6',
  resave: true,
  saveUninitialized: true
}))



app.post('/login', function (req, res) {
  // To replace with SQL query
  if (req.body.user === 'john' && req.body.password === 'johnspassword') {
    // To replace with actual user id
    req.session.user_id = 15;
    res.redirect('/my_secret_page');
  } else {
    res.send('Bad user/pass');
  }
});

app.get('/logout', function (req, res) {
  delete req.session.user_id;
  res.send('Logout succesful');
});

app.get('/my_secret_page', checkAuth, function (req, res) {
  // While we wait for actual content
  res.send('if you are viewing this page it means you are logged in');
});

function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
  } else {
    next();
  }
}



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;