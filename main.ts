let strip = neopixel.create(DigitalPin.P2, 64, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.setBrightness(100)
basic.forever(function () {
    strip.rotate(Math.map(input.soundLevel(), 0, 200, 0, 8))
    strip.show()
})
