const Express = require('express')
const app = Express()
const bodyParser = require('body-parser')
const rootRouter = require('./routing/root')
const slackSlashSampleRouter = require('./routing/slack/slash/sample')
const slackSlashInteractiveRouter = require('./routing/slack/slash/interactive')
const slackInteractivityRouter = require('./routing/slack/interactivity')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', rootRouter)
app.use('/slack/slash/sample', slackSlashSampleRouter)
app.use('/slack/slash/interactive', slackSlashInteractiveRouter)
app.use('/slack/interactivity', slackInteractivityRouter)

app.use((req, res) => {
  console.log(req.path)
  res.status(404)
  res.json({
    message: 'API Enddpoint is Not Found',
    requestPath: req.path,
  })
})

module.exports = app
