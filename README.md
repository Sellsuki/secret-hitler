# Secret Hitler

> Secret hitler game from Vue.js

## Concept
* ลอก [Secret hitler](http://secrethitler.games/)
* Repo ต้นแบบ [ftick/secret-hitler](https://github.com/ftick/secret-hitler)
* แต่ใช้ Firebase realtime database แทนการใช้ socket.io และ Postgres

## Secret Hitler Online
An online implementation of the board game [Secret Hitler](http://secrethitler.com), written in node.js and socket.io.

Play at [secrethitler.online](https://secrethitler.online) (requires 5 players, use guest accounts to test).

Supports 5-10 players, text or voice (beta) chat, and the game's core rule set. Game data is persisted to allow features like stat aggregation, or game replays in future.

## Attribution
"Secret Hitler" is a game designed by Max Temkin, Mike Boxleiter, Tommy Maranges, and Mackenzie Schubert. This adaptation is neither affiliated nor endorsed by the copyright holders.
___

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
