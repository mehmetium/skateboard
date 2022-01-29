 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:partner:750076057679429656> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:setting:750076062716788807> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:hypesquad1:750076071721828452> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:partner:750076057679429656> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:setting:750076062716788807> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hypesquad1:750076071721828452> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://i.hizliresim.com/Y7jFCB.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}