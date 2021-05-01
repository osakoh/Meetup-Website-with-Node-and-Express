const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

// port
const port = 3000;

// set up ejs template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// show when code is saved
// console.log('\nRestarting server\n');

// middleware to serve static files
app.use(express.static(path.join(__dirname, './static')));

// listen for all routes associated with the index page(/)
app.use('/', routes());

// // middleware for routing: speakers route
// app.get('/speakers', (request, response) => {
//   response.sendFile(path.join(__dirname, './static/speakers.html'));
// });

app.listen(port, () => {
  console.log(`Express server listening on port ${port}.....`);
});
