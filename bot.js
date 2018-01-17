const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require("./auth.json");

const welcome = "403132004725424128";
const rank = "403136969787572224";
const region = "403136986958921741";
const roles = "403137045142437890";


client.on("ready", () => {
  client.user.setGame("teemo");
});

client.on("message", (message) => {

  if(message.author.bot) return ;

  const rawArgs = message.content.split(/ +/g); //returns an array
  if(message.channel.id === rank) rank(message, rawArgs);
  if(message.channel.id === region) region(message, rawArgs);
  if(message.channel.id === roles) roles(message, rawArgs);


  if(message.content.indexOf(auth.prefix) !== 0) return ;

  const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); //returns the first parameter of the input of the user
  const commandArgs = args.join(' '); //returns all the parameters of the input of the user separated by a space

  if(message.channel.id === welcome && command === "accept") accept(message);




});
client.login(auth.token);

function accept(m){
  let member = m.guild.member(m.author);
  let role = m.guild.roles.find("name", "member");
  member.addRole(role);
  return m.content.delete;
}
