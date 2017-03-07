const express = require('express');
const router = express.Router();

const twitterClient = require('../utils/twitter');

module.exports = function(app, io) {
  // socket.io handler
  io.on('connection', (client) => {
    let currentStream;

    client.on('subscribe', (hashtag) => {
      if (currentStream) {
        currentStream.destroy();
      }

      const params = { track: `#${hashtag}` };

      twitterClient.stream('statuses/filter', params, (stream) => {
        currentStream = stream;

        stream.on('data', function(tweet) {
          client.emit(`tweet${hashtag}`, tweet);
        });

        stream.on('error', function(error) {
          console.log(error);
        });
      });
    });

    client.on('disconnect', () => {
      if (currentStream) {
        currentStream.destroy();
      }
    });
  });

  // http endpoint
  router.get('/latest', function(req, res) {
    const { q } =  req.query;
    const params = {
      q: `#${q}`,
      result_type: 'recent'
    };

    twitterClient.get('search/tweets', params, function(error, tweets, response) {
      if (!error) {
        res.send(tweets);
      } else {
        console.log(error);
      }
    });
  });

  // mount route
  app.use('/tweets', router);
}