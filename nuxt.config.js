module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: 'MailGrid',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
      ]
    },
    
    plugins: [
      '~/plugins/vuetify.js',
      '~/plugins/socket.io.js'
    ],

    env: {
      WS_URL: process.env.WS_URL || 'http://localhost:3000'
    },

    srcDir: process.cwd() + '/src/client',
    buildDir: process.cwd() + '/dist/client'
  }