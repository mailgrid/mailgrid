import * as express from 'express'
import {Nuxt, Builder} from 'nuxt'
import SMTPServer from './smtp'

const app = express()
const smtpServer = new SMTPServer(2525)
let config = require('../../nuxt.config.js')

config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

app.use(nuxt.render)

app.listen(3000, () => {
    smtpServer.start()
    console.log('Application is Running')
})