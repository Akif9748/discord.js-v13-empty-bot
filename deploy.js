const body = [
    {
        name: "command-1",
        description: "Command 1 description."
    },
    {
        name: "command-2",
        description: "Command 2 description."
    }
]

const { REST } = require('@discordjs/rest');
const { main } = require("./config.json");
const { botID } = main;
const { token } = main;
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log("Upload to Rest API has begun!");
        await rest.put(`/applications/${botID}/commands`, { body })
        console.log("Successfully uploaded to Rest API!");
    } catch (error) {
        console.error(error);
    }
})();
