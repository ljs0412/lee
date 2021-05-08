let 거리 = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    거리 = Math.round(pins.pulseIn(DigitalPin.P0, PulseValue.High) / 40)
    basic.showNumber(거리)
    basic.pause(100)
})
