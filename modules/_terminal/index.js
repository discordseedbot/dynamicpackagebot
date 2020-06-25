var inquirer = require("inquirer");
const { Signale } = require("signale");
global.SB_Client; global.SB_TokenFunction; global.SB_Libraries;

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
            color: 'yellow',
        }
    }
});

module.exports = function(a,b,c) {
    SB_Client = a;
    SB_TokenFunction = b;
    SB_Libraries = c;
    SB_Client.on('ready', () => {
        console.log("Waiting a tad bit before launching the Developer Console.");
        setTimeout(function(a,b,c) {
            termHandle(a,b,c);
        }, 2500)
    })
}

async function termHandle() {
    inquirer.prompt([
        {
            type: "text",
            message: "> ",
            name: 'termInput'
        }
    ]).then(ans => {
        commandHandler(ans.termInput.split(" "));
    }).catch(error => {
        signale.error(new Error(error));
        process.exit();
    })
}

function commandHandler(cmd) {

    // check if the command is valid

    let validCommands = require("./commands.json").commands;
    var cmdFunc = require("./commandHandle.js");

    if (validCommands.indexOf(cmd[0]) > -1){
        //command is valid
        switch (cmd[0]) {
            case "list":
            case "get":
            case "print":
                cmdFunc.print(cmd);
                break;
            case "set":
                cmdFunc.set(cmd);
                break;
            case "eval":
            case "run":
                cmdFunc.eval(cmd);
                break;
            case "exit":
            case "quit":
                termcon.seeya()
                process.exit();
                break;
            default:
                console.error(new Error());
                process.exit(0);
                break;
        }
    } else {
        //command is invalid
        termcon.invalidCommand()
        return false;
    }

}