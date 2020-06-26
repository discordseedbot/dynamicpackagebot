module.exports = async function() {
    /*

    ## Just a Heads up!

    SeedBot is currntly using Discord.js v11 that means you should use the v11 guide

    There are some custom varaibles that are given to everything (global varaible)
    so here is what they are
    SB_Client is the Discord.JS Client
    SB_Token is a function for the tokens, SB_Token.discord() is the discord token, etc...
    SB_Libraries is a JSON with the installed libraries, you should try debug mode and use the command "print libraries"

    */


    SB_Client.on('ready', async () => {
        console.log("Example Module Has Loaded and Logged In")
        // Here goes your code!
    })
}