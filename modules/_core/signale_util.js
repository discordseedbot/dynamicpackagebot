module.exports = async function() {
    const {Signale} = require("signale");
    global.termcon = new Signale({
        disabled: false,
        interactive: false,
        logLevel: 'info',
        scope: 'Terminal',
        stream: process.stdout,
        types: {
            err: {
                label: "General Error",
                color: 'red'
            },
            invalidCommand: {
                label: "Invalid Command",
                color: 'red'
            },
            invalidArgument: {
                label: "Invalid Argument",
                color: 'red'
            },
            succ: {
                label: "Success",
                color: 'green'
            },
            returnValue: {
                label: 'Return Value',
                color: 'yellow'
            },
            seeya: {
                label: "Quitting SeedBot",
                color: 'yellow'
            },
            warmingUp: {
                label: "Warming Up",
                color: 'blue'
            },
            info: {
                label: "Info",
                color: 'cyan'
            },
            newGuild: {
                label: "Bot Joined New Guild",
                color: 'green'
            }
        }
    });
    global.botModuleConsole = new Signale({
        disabled: false,
        interactive: false,
        logLevel: 'info',
        scope: 'BotModule',
        stream: process.stdout,
        types: {
            attemptLoad: {
                label: "Loading Bot Module:",
                color: 'yellow'
            },
            loaded: {
                label: "Loaded Bot Module:",
                color: 'green'
            }
        }
    })
    global.genericModuleConsole = new Signale({
        disabled: false,
        interactive: false,
        logLevel: 'info',
        scope: 'GenModule',
        stream: process.stdout,
        types: {
            attemptLoad: {
                label: "Loading Generic Module:",
                color: 'yellow'
            },
            loaded: {
                label: "Loaded Generic Module:",
                color: 'green'
            }
        }
    })
}