function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("p1 score" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("p2 score" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("ties" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("round" + round)
}
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    p1 = 0
    p2 = 0
    ties = 0
    round = 0
    OLED.writeStringNewLine("why so serious, lets play a game?")
    basic.pause(2000)
    update_scoreboard()
}
let round = 0
let ties = 0
let p2 = 0
let p1 = 0
reset()
