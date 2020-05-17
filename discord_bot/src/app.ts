import Discord from 'discord.js';
import {channelUpdate, receiveMessageHandler} from './utils/discord';

require('dotenv').config();

// const app = express();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("voiceStateUpdate", (...args) => channelUpdate(client, ...args))

client.on('message', (message) => receiveMessageHandler(client, message));

client.login(process.env.DISCORD_SECRET);

// app.get('/getDiscordBotInviteLink', (req, res) => {
// 	res.status(200).json({
// 		discordBotInviteLink: BOT_JOIN_URL
// 	});
// });
//
// app.listen(PORT, (err) => {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	return console.log(`server listening on port ${PORT}`);
// })
