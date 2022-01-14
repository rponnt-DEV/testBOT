const express = require('express')
const bodyParser = require('body-parser')
const bot = require("./trade2")

const Bot1 = bot.Bot1


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Storck test meow meow')
})

app.post('/tradingBot1', (req, res) => {
  let bot1 =new Bot1(req.body)
  console.log(bot1.result);
  res.status(200).json(bot1.result)
  })

app.post('/tradingBot2', (req, res) => {
    res.status(200).json(req.body)
  })

app.listen(8081, () => {
  console.log('Start server at port 8081.')
})