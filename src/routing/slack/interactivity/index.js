const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.post('/', bodyParser.urlencoded({ extended: false }), function (
  req,
  res
) {
  const payload = JSON.parse(req.body.payload)
  console.log(payload)
  res.json({
    text: 'Clicked!',
    attachments: [
      {
        text: payload.actions[0].name,
      },
    ],
  })
})

module.exports = router
