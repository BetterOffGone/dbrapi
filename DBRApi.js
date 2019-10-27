const wump = require('wumpfetch');
/*
 * name BotListAPI (DDBAPI)
 * author ᴮᵉᵗᵗᵉʳ ᴼᶠᶠ ᴳᵒⁿᵉ#0869
 * version 1.0.6
 * description: Custom BotListAPI For discordbotreviews.xyz
 */
module.exports = class DBR {
    constructor(token) {
        this.token = token;
    }
    postStats(servercount, botid) {
        if (!this.token) throw new TypeError('[DBR-MODULE][POST-STATS]: API token not provided');
        if (!botid) throw new Error("[DBR-MODULE][POST-STATS]: Bot ID must be specified.")
        if (!servercount) throw new Error("[DBR-MODULE][POST-STATS]: Server count must be specified.")
        if (isNaN(servercount)) throw new Error("[DBR-MODULE][POST-STATS]: Server count must be a number.")
        return new Promise(async (resolve, reject) => {
            try {
                const res = await wump(`https://discordbotreviews.xyz/api/bots/${botid}/stats`, {
                    method: 'POST',
                    headers: {
                        'Authorization': this.token
                    },
                    data: {
                        'server_count': servercount
                    }
                }).send();
                resolve(`[DBR-MODULE][POST-STATS]: Your stats have been updated to \nGuild Count: ${servercount}`);
            } catch (err) {
                reject(new Error(`[DBR-MODULE][POST-STATS]: ${err.message}`)); 
            }
        })
    }
};


