sed -i '.original' 's/SB_Client.users.get/SB_Client.users.cache.get/g' *.js
sed -i '.original' "s/.messages.get/..messages.cache.get/g" *.js
sed -i '.original' "s/.members.get/..members.cache.get/g" *.js
sed -i '.original' "s/SB_Client.ping/SB_Client.ws.ping/g" *.js
sed -i '.original' "s/SB_Client.status/SB_Client.ws.status/g" *.js
sed -i '.original' "s/.overwritePermissions/.createOverwrite/g" *.js
sed -i '.original' "s/.replacePermissionOverwrites/.overwritePermissions/g" *.js

# user stuff
sed -i '.original' "s/.presence.game/.presence.activities/g" *.js
sed -i '.original' "s/.setChannelPosition/.setChannelPositions/g" *.js
sed -i '.original' "s/.position/.rawPosition/g" *.js
sed -i '.original' "s/.calculatedPosition/.position/g" *.js

# Fetch
sed -i '.original' "s/SB_Client.fetchUser/client.users.fetch/g" *.js
sed -i '.original' "s/.fetchMember/.members.fetch/g" *.js
sed -i '.original' "s/.fetchMembers/.members.fetch/g" *.js
sed -i '.original' "s/.fetchMessages/.messages.fetch/g" *.js
sed -i '.original' "s/.fetchMessage/.messages.fetch/g" *.js
sed -i '.original' "s/.fetchPinnedMessages/.messages.fetchPinned/g" *.js

# Send
sed -i '.original' "s/.sendMessage/.send/g" *.js
sed -i '.original' "s/.sendEmbed/.send/g" *.js

# Roles
sed -i '.original' "s/.addRole/.roles.add/g" *.js
sed -i '.original' "s/.addRoles/.roles.add/g" *.js
sed -i '.original' "s/.removeRole/.roles.remove/g" 8
sed -i '.original' "s/.removeRoles/.roles.remove/g" *.js
sed -i '.original' "s/.setRoles/.role.set/g" *.js
sed -i '.original' "s/.roles.get/.roles.cache.get/g" *.js
sed -i '.original' "s/.colorRole/.role.color/g" *.js
sed -i '.original' "s/.highestRole/.roles.highest/g" *.js
sed -i '.original' "s/.hoistRole/.role.hoist/g" *.js
sed -i '.original' "s/.deleteAll()/.clear()/g" *.js
sed -i '.original' "s/.hasPermissions/.hasPermission/g" *.js
sed -i '.original' "s/.mute/.voice.mute/g" *.js
sed -i '.original' "s/.selfMute/.voice.selfMute/g" *.js
sed -i '.original' "s/.serverMute/.voice.serverMute/g" *.js
sed -i '.original' "s/.setDeaf(true)/.voice.setDeaf(true)/g" *.js
sed -i '.original' "s/.setMute(true)/.voice.setMute(true)/g" *.js
sed -i '.original' "s/.setDeaf(false)/.voice.setDeaf(false)/g" *.js
sed -i '.original' "s/.setMute(false)/.voice.setMute(false)/g" *.js
sed -i '.original' "s/.setVoiceChannel(null)/.voice.kick()/g" *.js
sed -i '.original' "s/.setVoiceChannel/.voice.setChannel/g" *.js
sed -i '.original' "s/.speaking/.voice.speaking/g" *.js
sed -i '.original' "s/.voiceChannelID/.voice.channelID/g" *.js
sed -i '.original' "s/.voiceChannel/.voice.channel/g" *.js
sed -i '.original' "s/.voiceSessionID/.voice.sessionID/g" *.js
sed -i '.original' "s/.clearReactions()/.reactions.removeAll()/g" *.js
sed -i '.original' "s/.isMentioned/.mentions.has/g" *.js
sed -i '.original' "s/.isMemberMentioned/.mentions.has/g" *.js
sed -i '.original' "s/.missingPermissions/.missing/g" *.js
sed -i '.original' "s/.raw/.bitfield/g" *.js

# Ban and Unban
sed -i '.original' "s/.ban/.members.ban/g" *.js
sed -i '.original' "s/.unban/.members.unban/g" *.js

# Image URL's
sed -i '.original' "s/.avatarURL/.avatarURL()/g" *.js
sed -i '.original' "s/.displayAvatarURL/.displayAvatarURL()/g" *.js
sed -i '.original' "s/.iconURL/.iconURL()/g" *.js
sed -i '.original' "s/.splashURL/.splashURL()/g" *.js

# Voice
sed -i '.original' "s/.playFile/.play/g" *.js
sed -i '.original' "s/.playStream/.play/g" *.js
sed -i '.original' "s/.playArbitraryInput/.play/g" *.js
sed -i '.original' "s/.playBroadcast/.play/g" *.js
sed -i '.original' "s/.createVoiceBroadcast/.voice.createBroadcast/g" *.js
sed -i '.original' "s/.dispatchers/.subscribers/g" *.js
sed -i '.original' "s/SB_Client.voiceConnections/SB_Client.voice.connections/g" *.js

# idk what this does
sed -i '.original' "s/.pause()/.pause(true)/g" *.js

echo "Done!"