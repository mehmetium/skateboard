const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:750076071721828452> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`sayacS_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:hypesquad1:750076071721828452>  **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(`<a:hypesquad1:750076071721828452>  **Sayaç başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`sayacS_${message.guild.id}`)  
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacBB_${message.guild.id}`) 
  db.delete(`sayacHG_${message.guild.id}`)  
};
exports.config = {
  name: 'sayaç-kapat',
  aliases: ["sayac-kapat"]
};
