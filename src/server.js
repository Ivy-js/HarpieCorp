import tmi from "tmi.js"
import dotenv from 'dotenv'

dotenv.config()

const { TWITCH_USERNAME, TWITCH_PASSWORD } = process.env
f

const client = new tmi.Client({
    channels: ["harpiecorp"], 
    options: { debug : true },
    identity: {
        username: TWITCH_USERNAME, 
        password : TWITCH_PASSWORD, 
    }
})


client.connect(); 

client.on("message", (channel, tags, message, self)=> {
    if(message === "!discord"){
        console.log(`${tags["display-name"]} : !discord`) 
        client.say(channel, `💜 ${tags["display-name"]} : Voici le lien officiel de notre serveur discord : https://discord.gg/harpiecorp !`)
    }
})