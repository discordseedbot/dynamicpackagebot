var inquirer = require("inquirer");
const {Signale} = require("signale");
global.Client; global.TokenFunction; global.Libraries;

global.con = new Signale({
    disabled: false,
    interactive: false,
    logLevel: 'info',
    scope: 'Terminal',
    secrets: [],
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
            scope: 'Return Value'
        }
    }
});

module.exports = async function(a,b,c) {
    Client = a;
    TokenFunction = b;
    Libraries = c;
    setTimeout(async function(a,b,c) {
        console.log("Waiting a tad bit before launching the Developer Console.");
        termHandle(a,b,c);
    }, 3000)
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

async function commandHandler(cmd) {
    console.log(cmd)

    // check if the command is valid

    if (validCommands.indexOf(cmd[0]) > -1){
        console.log(cmd)
        //command is valid
        var cmdFunc = require("./commandHandle.js")
        switch (cmd) {
            case "list":
            case "print":
            case "get":
                cmdFunc.print(cmd);
                break;
        }
    } else {
        //command is invalid
        con.invalidCommand()
        return false;
    }

}