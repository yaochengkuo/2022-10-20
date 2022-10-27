function 燈數 (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num < 16) {
        x = 0
        y = 17 - num
    } else if (num >= 16 && num < 19) {
        x = num - 16
        y = 1
    } else if (num >= 19 && num <= 21) {
        x = 3
        y = num - 18
    } else if (num > 21 && num <= 23) {
        x = 24 - num
        y = 3
    } else if (num == 24) {
        x = 1
        y = 26 - num
    } else if (num == 25) {
        x = num - 23
        y = 2
    }
    led.plot(x, y)
}
let y = 0
let x = 0
let a = 0
basic.forever(function () {
    a += 1
    燈數(a)
    basic.pause(100)
})
