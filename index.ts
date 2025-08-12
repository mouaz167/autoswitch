// ==UserPlugin==
// @name         Auto Switch to New Channel in Guild
// @author       ChatGPT
// @description  Switches to a newly created channel instantly in a specified guild
// @version      1.0
// ==/UserPlugin==

const targetGuildId = "1274584500743180319";

const { FluxDispatcher } = require("@webpack").findByProps("dispatch", "_currentDispatchActionType");
const { transitionToChannel } = require("@webpack").findByProps("transitionTo", "replaceWith");

function onChannelCreate({ channel }) {
    if (channel?.guild_id === targetGuildId) {
        transitionToChannel(channel.id);
    }
}

module.exports = {
    start() {
        FluxDispatcher.subscribe("CHANNEL_CREATE", onChannelCreate);
    },
    stop() {
        FluxDispatcher.unsubscribe("CHANNEL_CREATE", onChannelCreate);
    }
};
