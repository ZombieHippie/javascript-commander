var CodeMirror = require("codemirror")
// defaults and configuration that I prefer for CodeMirror

// css
require("codemirror/lib/codemirror.css")
require("codemirror/theme/mbo.css")
require("codemirror/mode/javascript/javascript.js")
require("codemirror/addon/search/searchcursor.js")
require("codemirror/addon/search/match-highlighter.js")
require("codemirror/addon/edit/closebrackets.js")
require("codemirror/keymap/sublime.js")
require("codemirror/addon/selection/mark-selection.js")

var altDefaults = {
  mode:'javascript',
  lineNumbers: false,
  indentWithTabs: false,
  highlightSelectionMatches: true,
  styleSelectedText: true,
  styleActiveLine: true,
  indentUnit: 2,
  autoCloseBrackets: true,
  cursorBlinkRate: 530, // Set to 0 so we can blink with css
  showCursorWhenSelecting: true,
  keyMap: 'sublime',
  indentWithTabs: false,
  smartIndent: false,
  autofocus: true,
  theme: "mbo"
}

var key
for (key in altDefaults) {
  CodeMirror.defaults[key] = altDefaults[key]
}

window.CodeMirror = CodeMirror

module.exports = CodeMirror
