module.exports = {
  "devServer": {
    https:false,
    "proxy": {
      "^/api": {
        "target": "http://localhost:3000",
        "secure": false
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
