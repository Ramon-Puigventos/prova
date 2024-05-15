basic.forever(function () {
    if (input.temperature() < 28) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
})
