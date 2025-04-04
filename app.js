const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/noresponse', (req, res) => {
  res.socket.destroy()
})

app.get('/version', (req, res) => {
  res.send('10') // change this string to ensure a new version deployed
})

app.use(express.static('dist'))


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
