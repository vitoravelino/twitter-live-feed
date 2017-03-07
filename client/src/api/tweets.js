import socketio from 'socket.io-client';

import http from './http';

const API_BASE_URL = process.env.API_BASE_URL;
const io = socketio(API_BASE_URL);

function latest(hashtag) {
  const url = `/tweets/latest?q=${hashtag}`;

  return http.get(url)
    .then(response => response.data.statuses);
}

function subscribe(hashtag, callback) {
  io.emit('subscribe', hashtag);
  io.on(`tweet${hashtag}`, callback);
}

export default {
  latest,
  subscribe,
};
