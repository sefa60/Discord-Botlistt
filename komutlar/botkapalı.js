const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botid = args[0]
  let sahip = args[1]
  let zaman = args[2]
  let kanal = "768439091452182529" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.**`).then(msg => msg.delete(10000))
  if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **Botun sahibinin idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!zaman) return message.channel.send(`<a:unlem:794638042484441170> **Gün sayısı belirtmelisin.**`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`**<a:dikkat:794638320495755334> <@${botid}> adlı bot kapalıdır. ${zaman} günden fazla kapalı kalırsa atılacakdır! <@${sahip}> adlı geliştiricinin durumu düzeltmesi önemle rica olunur.** ** \n Not: Botla ilgili bir maruziyetiniz varsa <@794543488808910858>'a yazabilirsiniz.**`);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu sahibine bildirdiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-kapalı', 'kapalı','k'],
  permLevel: 0
};

exports.help = {
  name: 'botkapalı', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};