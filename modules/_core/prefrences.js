module.exports.raw = function() {
    return require("./../../prefrences.js");
}

module.exports.prefix = function() {
    let prefJSON = require("./../../prefrences.js");
    prefJSON.forEach( (m) => {
        if (m.name === "prefix") {
            return m.data;
        }
    })
}

module.exports.developer_notif = function() {
    let prefJSON = require("./../../prefrences.js");
    prefJSON.forEach(async (m) => {
        if (m.name === "developer_notif") {
            return m.data;
        }
    })
}
