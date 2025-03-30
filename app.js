const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error()
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployed
})

app.use(express.static('dist'))


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
