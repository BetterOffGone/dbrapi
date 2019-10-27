[![npm installinfo](https://nodei.co/npm/dbrapi.png?downloads=true&stars=true)](https://www.npmjs.com/package/dbrapi)<br>
[![Discord](https://discordapp.com/api/guilds/500658335217876997/widget.png)](https://discord.gg/A2BYrj8)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4e138d2f45ee449bbc73b73d6a107fe2)](https://github.com/BetterOffGone/dbrapi)
[![npm version](https://img.shields.io/npm/v/dbrapi.svg?maxAge=3600)](https://www.npmjs.com/package/dbrapi)
[![npm downloads](https://img.shields.io/npm/dt/dbrapi.svg?maxAge=3600)](https://www.npmjs.com/package/dbrapi)
[Developer Of This Module](https://discordbotreviews.xyz/user/626902605905395732)

Here's the unofficial module of **DiscordBotReviews Bot List** API in JavaScript.
#### Installation

Using **npm**

`npm i dbrapi`

Using **yarn**

`yarn add dbrapi`
<hr>

#### Methods
- .postStats()
- .getWidget()
<hr>

#### Examples

Methods usage:
```js
const DBRAPI = require('dbrapi');
const dbr = new DBRAPI('BOT_ID','API_KEY');

```

-  .postStats()
```js
dbr.postStats('SERVER_COUNT')
    .then(console.log);
```

-  .getWidget()
```js

dbr.getWidget('BOT_ID')
    .then(console.log);
```

#### Basic Example

```js
/*
 * name BotListAPI (DBRAPI)
 * author ᴮᵉᵗᵗᵉʳ ᴼᶠᶠ ᴳᵒⁿᵉ#0869
 * version 1.1.6
 * description: Custom BotListAPI For DiscordBotReviews.xyz
 * information: This is an example usage.
 */
const DBR = require('dbrapi');
module.exports = (client) => {
    const dbr = new DBR(client.user.id, client.botlist.dbr.token);
    dbr.postStats(client.guilds.size).then(() => {
        console.log();
    }).catch((err) => {
        console.log();
    });
};
```