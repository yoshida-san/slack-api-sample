const express = require('express')
const sendMessage = require('../../../functions/sendMessage')
const router = express.Router()

router.post('/', function (req, res) {
  const params = {
    channel: req.body.channel_id,
    text: '',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
            '<https://google.com|Chew choo!> Lorem ipsum dolor sit amet, consectetur adipiscing elit!!',
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Google',
              emoji: true,
            },
            url: 'https://google.com',
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'No thanks',
              emoji: true,
            },
          },
        ],
      },
    ],
  }
  sendMessage(params)
    .then(() => {
      console.log('Finish')
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => res.send())
})

module.exports = router
