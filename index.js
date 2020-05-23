/**
 * If running on Nodejs 5.x and below, we load the transpiled code.
 * Otherwise, we use the ES6 code.
 * We are deprecating support for Node.js v5.x and below.
 */
const majorVersion = parseInt(process.versions.node.split('.')[0], 10);
if (majorVersion <= 5) {
  const deprecate = require('depd')('node-telegram-bot-api');
  deprecate('Node.js v5.x and below will no longer be supported in the future');
  module.exports = require('./lib/telegram');
} else {
  module.exports = require('./src/telegram');
}

const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1219108831:AAH2UkJk4QOgiwCBiF-9r3WuqfoZn43A8VA'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from bot Chompy. Chompy says: "Hi, ${msg.from.first_name}"`)
})
