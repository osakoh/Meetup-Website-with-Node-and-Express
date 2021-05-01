const express = require('express');

const router = express.Router();

module.exports = () => {
  // middleware for routing: home/index route
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Meetup website' });
  });

  return router;
};
