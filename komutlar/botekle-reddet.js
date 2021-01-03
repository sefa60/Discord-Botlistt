const Discord = require('discord.js');//Atlantic Code'ye Aittir.


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botid = args[0]
  let sahip = args[1]
  let prefix = args[2]
  let sebep = args[3]
  let sebepp = args[3]
  let sebeppp = args[3]
  let kanal = "795039723793285160" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
  
	if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Başvuruda bulunulmuş bir botu yalnızca <#${kanal}> kanalında onaylayabilirsin.**`).then(msg => msg.delete(5000))
	if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
  if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
   if (!prefix) return message.channel.send(`<a:unlem:794638042484441170> **Botun prefixini yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()

  client.channels.get(log).send(`<:onaylandi:794990256537075723> <@${sahip}> **adlı geliştiricinin; <@${botid}> adlı, __${botid}__ idli botu onaylandı.**\n <a:hyq:794637845255421953> __**Botu Onaylayan Yetkili :**__ ${message.author} - **${message.author.tag}**`)
  
  
  message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu reddettiniz.**`).then(msg => msg.delete(10000))
};//Atlantic Code'ye Aittir.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet','ret','r'],
  permLevel: 3
};//Atlantic Code'ye Aittir.

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'//Atlantic Code Adına Sefa MERT Tarafından Geliştirilmiştir
};6