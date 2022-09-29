input.onPinPressed(TouchPin.P1, function () {
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    if (effect < 6) {
        effect += 1
    } else {
        effect = 0
    }
    if (effect == 4) {
        strip.showRainbow(1, 360)
    }
})
input.onGesture(Gesture.Shake, function () {
    effect = 7
})
let effect = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
effect = 0
strip.setBrightness(255)
basic.forever(function () {
    if (effect == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (effect == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (effect == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (effect == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (effect == 4) {
        basic.pause(100)
        strip.rotate(1)
        strip.show()
    } else if (effect == 5) {
        strip.showBarGraph(input.temperature(), 25)
        basic.pause(100)
    } else if (effect == 6) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
