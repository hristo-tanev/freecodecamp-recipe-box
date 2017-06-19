import express from 'express'
import webpack from 'webpack'
import webHotMiddleware from 'webpack-hot-middleware'
import webDevMiddleware from 'webpack-dev-middleware'

import config from '../webpack.config'
import handleRoutes from './routes'

let app = new express()
let compiler = webpack(config)

app.use(express.static('src'))
app.use(webHotMiddleware(compiler))
app.use(webDevMiddleware(compiler))

handleRoutes(app)

app.listen(3000)
