const express = require('express')
const sendMessage = require('../../../functions/sendMessage')
const router = express.Router()

router.post('/', function (req, res) {
  const params = {
    channel: req.body.channel_id,
    text: 'send interactive message! please choose.',
    attachments: [
      {
        callback_id: 'cb_interactive_sample',
        text: '',
        actions: ['choose A', 'choose B', 'choose C'].map((v) => ({
          type: 'button',
          text: v,
          name: v,
        })),
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
