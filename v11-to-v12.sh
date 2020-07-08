#!/bin/bash


## free linux web enviroments for uname things http://copy.sh/v86/

convert__bsd() {
    # client shit
    sed -i '.original' 's/SB_Client.users.get/SB_Client.users.cache.get/g' *.js
    sed -i '.original' "s/.messages.get/channel.messages.cache.get/g" *.js
    sed -i '.original' "s/.members.get/guild.members.cache.get/g" *.js
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
    sed -i '.original' "s/.fetchMember/guild.members.fetch/g" *.js
    sed -i '.original' "s/.fetchMembers/guild.members.fetch/g" *.js
    sed -i '.original' "s/.fetchMessage/messages.fetch/g" *.js
    sed -i '.original' "s/.fetchPinnedMessages/.messages.fetchPinned/g" *.js

    # Send
    sed -i '.original' "s/.sendMessage/.send/g" *.js
    sed -i '.original' "s/.sendEmbed/.send/g" *.js

    # Roles
    sed -i '.original' "s/.addRole/.roles.add/g" *.js
    sed -i '.original' "s/.addRoles/.roles.add/g" *.js
    sed -i '.original' "s/.removeRole/.roles.remove/g" *.js
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
    return
}

convert__linux-gnu() {
    echo "linux/gnu"
    _base
}

_base() {
    # based on what
    # sed "s/ / /g" *.js

    sed 's/SB_Client.users.get/SB_Client.users.cache.get/g' *.js
    sed "s/.messages.get/..messages.cache.get/g" *.js
    sed "s/.members.get/..members.cache.get/g" *.js
    sed "s/SB_Client.ping/SB_Client.ws.ping/g" *.js
    sed "s/SB_Client.status/SB_Client.ws.status/g" *.js
    sed "s/.overwritePermissions/.createOverwrite/g" *.js
    sed "s/.replacePermissionOverwrites/.overwritePermissions/g" *.js

    # user stuff
    sed "s/.presence.game/.presence.activities/g" *.js
    sed "s/.setChannelPosition/.setChannelPositions/g" *.js
    sed "s/.position/.rawPosition/g" *.js
    sed "s/.calculatedPosition/.position/g" *.js

    # Fetch
    sed "s/SB_Client.fetchUser/client.users.fetch/g" *.js
    sed "s/.fetchMember/.members.fetch/g" *.js
    sed "s/.fetchMembers/.members.fetch/g" *.js
    sed "s/.fetchMessages/.messages.fetch/g" *.js
    sed "s/.fetchMessage/.messages.fetch/g" *.js
    sed "s/.fetchPinnedMessages/.messages.fetchPinned/g" *.js

    # Send
    sed "s/.sendMessage/.send/g" *.js
    sed "s/.sendEmbed/.send/g" *.js

    # Roles
    sed "s/.addRole/.roles.add/g" *.js
    sed "s/.addRoles/.roles.add/g" *.js
    sed "s/.removeRole/.roles.remove/g" 8
    sed "s/.removeRoles/.roles.remove/g" *.js
    sed "s/.setRoles/.role.set/g" *.js
    sed "s/.roles.get/.roles.cache.get/g" *.js
    sed "s/.colorRole/.role.color/g" *.js
    sed "s/.highestRole/.roles.highest/g" *.js
    sed "s/.hoistRole/.role.hoist/g" *.js
    sed "s/.deleteAll()/.clear()/g" *.js
    sed "s/.hasPermissions/.hasPermission/g" *.js
    sed "s/.mute/.voice.mute/g" *.js
    sed "s/.selfMute/.voice.selfMute/g" *.js
    sed "s/.serverMute/.voice.serverMute/g" *.js
    sed "s/.setDeaf(true)/.voice.setDeaf(true)/g" *.js
    sed "s/.setMute(true)/.voice.setMute(true)/g" *.js
    sed "s/.setDeaf(false)/.voice.setDeaf(false)/g" *.js
    sed "s/.setMute(false)/.voice.setMute(false)/g" *.js
    sed "s/.setVoiceChannel(null)/.voice.kick()/g" *.js
    sed "s/.setVoiceChannel/.voice.setChannel/g" *.js
    sed "s/.speaking/.voice.speaking/g" *.js
    sed "s/.voiceChannelID/.voice.channelID/g" *.js
    sed "s/.voiceChannel/.voice.channel/g" *.js
    sed "s/.voiceSessionID/.voice.sessionID/g" *.js
    sed "s/.clearReactions()/.reactions.removeAll()/g" *.js
    sed "s/.isMentioned/.mentions.has/g" *.js
    sed "s/.isMemberMentioned/.mentions.has/g" *.js
    sed "s/.missingPermissions/.missing/g" *.js
    sed "s/.raw/.bitfield/g" *.js

    # Ban and Unban
    sed "s/.ban/.members.ban/g" *.js
    sed "s/.unban/.members.unban/g" *.js

    # Image URL's
    sed "s/.avatarURL/.avatarURL()/g" *.js
    sed "s/.displayAvatarURL/.displayAvatarURL()/g" *.js
    sed "s/.iconURL/.iconURL()/g" *.js
    sed "s/.splashURL/.splashURL()/g" *.js

    # Voice
    sed "s/.playFile/.play/g" *.js
    sed "s/.playStream/.play/g" *.js
    sed "s/.playArbitraryInput/.play/g" *.js
    sed "s/.playBroadcast/.play/g" *.js
    sed "s/.createVoiceBroadcast/.voice.createBroadcast/g" *.js
    sed "s/.dispatchers/.subscribers/g" *.js
    sed "s/SB_Client.voiceConnections/SB_Client.voice.connections/g" *.js

    # idk what this does
    sed "s/.pause()/.pause(true)/g" *.js

    echo "Done!"

    return
}


echo "### WARNING ###"
echo "This script replaces text in *every fucking file* in the modules directory"

read -p "Are you sure? " -n 1 -r
echo    # (optional) move to a new line

os=${OSTYPE//[0-9.-]*/}

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Converting..."



    for d in ./modules/*; do
        cd $d
        if [ "$os" == "darwin" ]; then
            convert__bsd
        fi

        if [ "$os" == "linux" ]; then
            convert__linux-gnu
        fi
        cd ..
        cd ..
    done

    
fi
