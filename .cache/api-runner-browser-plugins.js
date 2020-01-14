module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-lunr/gatsby-browser.js'),
      options: {"plugins":[],"languages":[{"name":"en"}],"fields":[{"name":"tags","store":true,"attributes":{"boost":20}},{"name":"user","store":true,"attributes":{"boost":5}},{"name":"largeImageURL","store":true,"attributes":{"boost":5}}],"resolvers":{"PixabayPhoto":{}},"filename":"search_index_json"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
