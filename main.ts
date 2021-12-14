radio.onReceivedString(function (receivedString) {
    message_rece = parseFloat(receivedString)
    if (message_rece < message) {
        basic.showString("Win!")
    } else if (message_rece == message) {
        basic.showString("Draw!")
    } else {
        basic.showString("Lose!")
    }
    basic.showString("" + (message))
})
input.onGesture(Gesture.Shake, function () {
    message = randint(1, 6)
    radio.sendString("" + (message))
    basic.showString("" + (message))
    basic.pause(500)
})
let message = 0
let message_rece = 0
radio.setGroup(1)
basic.forever(function () {
	
})
