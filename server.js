const express = require('express');
const path = require('path');

const app = express();

// port
const port = 3000;

// middleware to serve static files
app.use(express.static(path.join(__dirname, './static')));

// home route
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

// speakers route
app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}.....`);
});
