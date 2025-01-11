const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *ABDULLAH KING*

> *ABDULLAH KING MD REPO:*
*|* *https://github.com/abdullahkh123/ABDULLAH-KING-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029VauRrf0DOQIUMFSnDZ24*
*╰──────────────●●►*

> *ABDULLAH-KIMG-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363358664877093@newsletter',
      newsletterName: "𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇-𝐊𝐈𝐍𝐆-𝐌𝐃",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'ABDULLAH-KING MD', 
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/abdullahkh123/ABDULLAH-KING-MD" ,
thumbnailUrl: "https://i.imgur.com/UfzyhWN.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
