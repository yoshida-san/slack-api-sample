const { WebClient } = require('@slack/web-api')
const client = new WebClient(process.env.SLACK_BOT_TOKEN)

const sendMessage = async (params) => {
  const response = await client.chat.postMessage(params)
  console.log(response)
}

module.exports = sendMessage
