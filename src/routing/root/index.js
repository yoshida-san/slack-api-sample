const express = require('express')
const router = express.Router()

router.post('/', function (req, res) {
  res.status(200)
  res.json({
    message: `Hello ${req.body.name ? req.body.name : 'World'}!!`,
    requestPath: req.path,
  })
})

module.exports = router
