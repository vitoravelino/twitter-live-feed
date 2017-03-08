# twitter live feed

Monitoring real-time content on twitter.

![Demo](https://raw.githubusercontent.com/vitoravelino/twitter-live-feed/master/demo.gif)

## Requirements

* [Node.js](http://nodejs.org/) (>= 6)
* Twitter API keys

## Cloning the repo

```sh
$ git clone git@github.com:vitoravelino/twitter-live-feed.git
$ cd twitter-live-feed
```

# Configuring .env

In order to run the server, you'll need to rename or copy `.env.sample` to `.env` and set the keys and access tokens from your [Twitter API account](https://apps.twitter.com).

# Running locally

After setting the `.env`, all you gotta do is install the dependencies and run the npm task to start the servers. Run the commands below on both folders (`server/` and `client/`):

```sh
$ yarn install
$ yarn run dev
```

It will install the dependencies and run the servers. After that you'll be able to access the demo at http://localhost:5000.

# Twitter Rate Limit

Everytime a new hashtag is requested on the client, another request is done to Twitter Stream API. You gotta be aware that the stream api use is very restrict. If you don't see any new tweet coming, check if there's a 420 error on server console. That indicates that stream request was blocked due rate limit.

More info at [Twitter Stream documentation](https://dev.twitter.com/streaming/overview/connecting#reconnecting).


