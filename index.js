require("dotenv").config();

// Require the necessary discord.js classes
const {
  Client,
  Events,
  GatewayIntentBits,
  SlashCommandBuilder,
} = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

// When the client is ready, run this code (only once).
// The distinction between client: Client<boolean> and readyClient: Client<true> is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);

});

client.on(Events.InteractionCreate, (interaction) => {

 });
// Log in to Discord wiçth your client's token
client.login(process.env.TOKEN);
