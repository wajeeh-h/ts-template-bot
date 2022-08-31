import {
  ActivityOptions,
  ActivityType,
  GatewayIntentBits,
  Partials,
} from "discord.js";
import dotenv from "dotenv";

dotenv.config();

// Read environment variables
const TEST_ID = process.env.TEST_ID;
const ID_ONE = process.env.ID_ONE;
const ID_TWO = process.env.ID_TWO;
const CLIENT_ID = process.env.CLIENT_ID;
const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

const STATUS: ActivityOptions = {
  name: "Only Fans...",
  type: ActivityType.Streaming,
  url: "https://www.twitch.tv/wageethewitch",
};

const INTENTS: GatewayIntentBits[] = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildScheduledEvents,
];

const PARTIALS: Partials[] = [
  Partials.User,
  Partials.Channel,
  Partials.GuildMember,
  Partials.Message,
  Partials.Reaction,
  Partials.GuildScheduledEvent,
  Partials.ThreadMember,
];

export {
  TEST_ID,
  ID_ONE,
  ID_TWO,
  CLIENT_ID,
  TOKEN,
	STATUS,
  PREFIX,
  PARTIALS,
  INTENTS,
}
