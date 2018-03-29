import {Nuxt, Builder} from 'nuxt'
let config = require('../../../../nuxt.config.js')

export default class NuxtMiddleware {
    get(): any {
        config.dev = !(process.env.NODE_ENV === 'production')

        const nuxt = new Nuxt(config)
        
        // Build only in dev mode
        if (config.dev) {
            const builder = new Builder(nuxt)
            builder.build()
        }
        
        return nuxt.render
    }
}