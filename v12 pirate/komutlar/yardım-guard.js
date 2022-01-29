 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Koruma Komutları`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__YAKINDA__`,`<a:setting:750076062716788807> Bu Komut Çok Yakında Eklenecektir.`)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://i.hizliresim.com/Y7jFCB.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

