import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

var app = express()

const config = {
  port: 8082
}

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
app.use(bodyParser.json())       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/login/request_access', (req, res) => {
  const {pin} = req.body
  console.log(pin)
  if (pin === '1234') {
    res.status(200).json({
      status: 'ok',
      user: {
        name: 'Marioara Vasile Popescul',
        bade_id: '1232131231231',
        logged_at: new Date().getTime()
      }
    })
  } else {
    res.status(401).json({})
  }
})

app.listen(config.port, function () {
  console.log(`Server is on ${config.port} !!`)
})
