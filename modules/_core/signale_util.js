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
            }
        }
    });
}