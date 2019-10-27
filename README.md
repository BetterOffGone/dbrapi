## DBRAPI - By NightcoreDEV

### This Is The Unofficial DBR API

### This can be used as an external file and be required in the main file of your bot (Example 2)

# Example 1 - Usage (Javascript) -rename this to poststats.js and place it in PostStats (if following examples)

```js
/*
 * name BotListAPI (DBRAPI)
 * author ᴮᵉᵗᵗᵉʳ ᴼᶠᶠ ᴳᵒⁿᵉ#0869 (nightcoredev)
 * version 1.0.6
 * description: Custom BotListAPI For DiscordBotReviews.xyz
 * information: This is an example usage.
 */

const DBR = require('dbrapi');
module.exports = (client) => {
    if (client.config.botlist.dbrtoken === "") return;
    const dbr = new DBR(client.config.botlist.dbrtoken);
    dbr.postStats(client.guilds.size, client.user.id).then(() => {
        console.log(`DBR: Guild Stats Updated`);
    }).catch((err) => {
        console.log(`DBR: ${err}`);
    });
};
```

# Example 2 - Requiring Externally

```js
/*
 * name Basic Example
 * author ᴮᵉᵗᵗᵉʳ ᴼᶠᶠ ᴳᵒⁿᵉ#0869 (nightcoredev)
 * version 1.0.6
 * description: Basic Example of Usage For DiscordBotReviews.xyz Unofficial API
 */
const Discord = require("discord.js");

const client = new Discord.Client({
  disableEveryone: true,
  fetchAllMembers: true
});
client.config = require("./Settings/config.json");
require("./PostStats/poststats.js")(client);

client.commands = new Discord.Collection();
client.login(client.config.token);

module.exports = client;
```