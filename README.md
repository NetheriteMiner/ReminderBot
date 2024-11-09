# ReminderBot
Simple discord bot that sends a DM whenever your rescue cooldown is finished in GD Colon's Zoo Discord Bot

# Overview
Once every hour, this discord bot sends a request to [GD Colon](https://gdcolon.com/)'s zoo api to determine if the user's cooldown has finished. If it has, it will send them a DM. If not, it will wait an hour. **Requires the [API Key](https://zoobot.wiki/index.php/API_Key) relic**

# "Quick" start
## This tutorial assumes you have created a discord bot already. If you have not, follow [these instructions](https://discordjs.guide/preparations/setting-up-a-bot-application.html) - "setting up a bot application" and "adding your bot to servers". I am unsure whether this code will work for bots installed to a user rather than traditional server bots. Feel free to try it as a user-installed bot but if it doesn't work, you may need to adjust the code or your bot application. If you know whether it works, please edit this README!
### I also assume you have nodejs installed on your computer.

1. Download the source files with your preferred method, most likely `git clone https://github.com/NetheriteMiner/ReminderBot.git` or download zip.
2. In the folder with all of the files (I will call this "home"), run `npm i` to get the node dependencies
3. In home/commands/reminders.js, change the value of `const ID` (line 4) to be your discord user id. If you do not know your discord user id, follow [these instructions](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID). This tells the bot where to DM you.
4. In home/commands/reminders.js, the bot skips sending a reminder during times you are asleep. This is desirable because it sends an additional reminder every hour, which may mean you would have woken up to several reminders if your cooldown finished overnight. To remove this, delete lines 24 to 30 (`const date = new Date()` to the end of the if statement, `}`). You may adjust your timezone by changing the -5 in the expression `(UTCHours - 5 + 24) % 24)` on line 26. You may adjust the times you do not want to be disturbed by adjusting the 23 and 6 on line 27; "23" means 23:00 or 11pm, "6" means 6:00 or 6am. 
5. Create a file `.env` - a file whose name is empty and extension is "env" - in home. On Windows, this may be difficult because Windows is Windows (you may need to look it up), but on Linux it's as simple as `touch .env`.
6. Open that file using whichever file editing application you prefer, then write
```
TOKEN=
CLIENT_ID=
```
and paste in your token and client id obtained from the [discord developer portal](https://discord.com/developers).

7. If all goes well, you should be able to run `node registerCommands.js` once, then `node index.js` to run your bot. You can host your bot on any computer that is on at all times and has nodejs installed. Test if the bot is online by running /latency or just wait a while and see if you get a notification.

# Debugging
Your debugging will almost certainly be in home/commands/reminders.js, so there are commented out console.log()s if you need them. Also note the commented out `remind(client)` near the bottom of the file - to test a reminder as soon as the bot starts up.

# Contributing
All contributions are welcome! 
Please note that this repository is licensed under the Unlicense, which means it is all in the public domain. By contributing to this project, any code you contribute will also be released into the public domain.

<sub><sup>also, I would appreciate it if someone helped me fix the doReminders function. i don't know what i was thinking and it looks more complicated than it needs to be. please make a pr or let me know if it can't be simplified.</sup></sub>

Follow the standard contribution instructions:
- Fork the project
- Clone your forked project to your computer
- Edit the files locally and test it
- Commit and push your changes
- Create a pull request

If I don't comment, merge, or deny your PR in 7 days, DM me on discord (`@netheriteminer`). I do not accept friend requests but my DMs are open in the 9th Tail Bot Hub server, which if you care enough about zoo to contribute to this script, you're almost certainly a member.

Made with ❤️ by NetheriteMiner in the public domain.
