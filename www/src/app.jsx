var browserStore = require('browser-store')
var page = require('page.js')

var GameClient = require("./lib/game-client.jsx")
var client = new GameClient()

var mainEl = document.getElementById("main")

page("/start", function startRound () {
  console.log("Starting game")
  page.redirect("/round/1")
})

require("./routes/round.jsx")(page, client)

page("/gameover", function showGameover () {
  console.log("gameover")
})

page("/", function showStartScreen (ctx) {
  console.log("hello", ctx)
})

var editorEl = document.getElementById("editor")
setTimeout(() => {
  page({
    hashbang: true
  })
}, 1000)

