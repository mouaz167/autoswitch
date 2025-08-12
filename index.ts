// ==UserScript==
// @name         Auto Switch to New Channel in Guild
// @version      1.0
// @description  Switches to a newly created channel instantly in a specified guild
// @author       ChatGPT
// ==/UserScript==

const targetGuildId = "1274584500743180319";

const { React, channels, transitionToChannel } = vendored;

function onChannelCreate(channel) {
  // Check if the channel is in the target guild
  if (channel.guild_id === targetGuildId) {1274584500743180319}
    // Switch to the new channel instantly
    transitionToChannel(channel.id);
  }
}

function start() {
  // Patch the channel creation event emitter
  // Discord uses a dispatcher for channel events

  // vendored.events is an event emitter we can hook into
  vendored.events.on("CHANNEL_CREATE", onChannelCreate);
}

function stop() {
  vendored.events.off("CHANNEL_CREATE", onChannelCreate);
}

module.exports = {
  start,
  stop,
};
