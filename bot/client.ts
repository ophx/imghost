require("dotenv").config();
import { Client, REST, GatewayIntentBits, Routes, EmbedBuilder } from "discord.js";
import moment from "moment";

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

async function registerCommands() {
    const rest = new REST().setToken(String(process.env.TOKEN));
    const commands = [
        {
            name: "lookup",
            description: "Lookup a user on OphxHost",
            options: [
                {
                    name: "id",
                    description: "id",
                    type: 3,
                    required: true,
                },
            ],
        },
    ];

    try {
        console.log("Started refreshing application [/] commands");
        await rest.put(Routes.applicationCommands("1162769255075418112"), { body: commands });
        console.log("Loaded application [/] commands");
    } catch (err) {
        console.log("Error loading application [/] commands");
        console.log(err);
    }
}

client.on("ready", async () => {
    console.log(`${client?.user?.username} is now connected to Discord`);
    client?.user?.setActivity("with my dick");
    registerCommands();
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "lookup") {
        const response = await fetch(`http://localhost:3000/api/commands/lookup?key=${process.env.WEB_API_KEY}&id=${interaction.options.get("id")?.value?.toString()}`);
        const user = await response.json();

        if (user) {
            const embed = new EmbedBuilder()
            .setTitle("User Lookup")
            .setDescription(`\`\`\`ansi
[1;2m[1;30m[UID][0m[0m ${user?.id}
[1;2m[1;30m[Username][0m[0m ${user?.username}
[1;2m[1;30m[Role][0m[0m ${user?.role}
[1;2m[1;30m[UUID][0m[0m ${user?.uuid}
[1;2m[1;30m[Registered][0m[0m ${moment(user?.createdAt).calendar()}
[1;2m[1;30m[Discord ID][0m[0m ${user?.discordId}
[1;2m[1;30m[Discord Username][0m[0m ${user?.discordUsername}\`\`\``)
            .setTimestamp()
        
            interaction.reply({ content: "", embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
            .setTitle("User Lookup")
            .setDescription("User was not found!")
            .setTimestamp()
        
            interaction.reply({ content: "", embeds: [embed] });
        }
    }
});

client.login(process.env.TOKEN);