input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("popo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(2)
