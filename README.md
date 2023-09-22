# Squid tracking USDC transfers on Ethereum

This [squid](https://docs.subsquid.io/) captures USDC Transfer events on ETH, stores them in a database and serves the data over a GraphQL API.

The Ethereum data ingester ("processor") is located in `src/main.ts`. It can be started with `sqd process`. GraphQL server runs as a separate process started by `sqd serve`. You can also use `sqd run` to run all the services at once.

The squid uses [Subsquid Network](https://docs.subsquid.io/subsquid-network) as its primary data source.

Dependencies: Node.js, Docker, Git.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Clone the repo
git clone https://github.com/subsquid-labs/quest-single-chain-squid
cd quest-single-chain-squid

# 2. Install dependencies
npm ci

# 3. Start containers for the Postgres database and the network query gateway
sqd up

# 4. Build and start the processor
sqd process

# 5. Start the GraphQL server by running in yet another terminal
sqd serve
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).
