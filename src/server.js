require('dotenv').config()
const app = require('./app.js')
app.listen(80, () => {
  console.log('Server running.')
})
