const { REST } = require('@discordjs/rest');
const fs = require("fs")
const { main } = require("./config.json");
const { botID } = main;
const { token } = main;
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log("Upload to Rest API has begun!");
        const data = await rest.get(`/applications/${botID}/commands`)
        for (const command of data)
            await rest.delete(`/applications/${botID}/commands/${command.id}`)
        console.log("Successfully uploaded to Rest API!");
    } catch (error) {
        console.error(error);
    }
})();