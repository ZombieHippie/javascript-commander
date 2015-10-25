module.exports = roundRoute
var CodeMirror = require('../editor.jsx')

var mainEl = document.getElementById("main")
var editorEl = null
var currentChallenge = null

function roundRoute (page, client) {
  // set up route
  page("/round/:id", setupEditor, showRound)

  function setupEditor (ctx) {
    if (ctx.params.id != client.round)
      page.redirect("/round/" + client.round)

    else if (editorEl == null) {
      editorEl = document.createElement("textarea")
      mainEl.appendChild(editorEl)
      CodeMirror.fromTextArea(editorEl)
    }
  }

  function showRound (ctx) {
    currentChallenge = client.getChallenge()
    console.log("currentChallenge", currentChallenge)
    editorEl.CodeMirror.setValue(currentChallenge.code)
  }
}