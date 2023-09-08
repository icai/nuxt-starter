import express from 'express'
import { fromNodeMiddleware } from 'h3'

const app = express()
// show hello world
app.get('/*', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

export default fromNodeMiddleware((req, res, next) => {
  console.log(req.url, req.method, Date.now())
  app.handle(req, res, next)
})
  