# twitter live feed

Monitoring real-time content on twitter.

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
