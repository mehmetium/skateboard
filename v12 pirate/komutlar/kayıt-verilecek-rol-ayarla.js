const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:750076071721828452>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:hypesquad1:750076071721828452>  **Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz!**\n**__Örnek__**: \`${prefix}kayıt-verilecek-rol-ayarla @VerilecekRol\``)
 
  message.channel.send(`<a:hypesquad1:750076071721828452>  **Kayıt Olan Kullanıcılardan Verilecek Otomatik Rol** \`${rol}\` **Şeklinde Ayarlandı!**`)

 
  db.set(`kayitVR_${message.guild.id}`, rol.id)  
};
exports.config = {
  name: 'kayıt-verilecek-rol-ayarla',
  aliases: []
};
