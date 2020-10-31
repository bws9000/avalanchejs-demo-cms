module.exports = {
  "devServer": {
    https:true,
    "proxy": {
      "^/api": {
        "target": "https://localhost:3000",
        "secure": false
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
