function GameClient () {
  this.round = 0
}

GameClient.prototype.nextRound = () => {
  this.round += 1;
}

GameClient.prototype.getChallenge = () => {
    return {
      code: "function DoubleIt (num) {\n  return num * 2;\n}",
      text: "Return the number doubled.",
      title: "Double It",
      id: this.round
    }
  }

module.exports = GameClient

