module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: 'starter',
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
    
    plugins: ['~/plugins/vuetify.js'],

    srcDir: process.cwd() + '/src/client',
    buildDir: process.cwd() + '/dist/client'
  }