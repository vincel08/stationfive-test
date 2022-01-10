const express = require('express')
const { getResponse } = require('./lib/messaging')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/message', (req, res) => {
  const params = req.body

  if (params.conversation_id && params.message) {
    const response = getResponse(params.message)

    res.json({
      response_id: params.conversation_id,
      response
    })
  } else {
    res.status(400).json({
      error: 'invalid format'
    })
  }
})

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})