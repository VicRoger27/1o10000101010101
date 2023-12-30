input.onButtonPressed(Button.A, function () {
    if (calculus == 5) {
        lcd_counter += 1
    } else {
        lcd_counter += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (calculus == 5) {
        lcd_counter += 1
    } else {
        lcd_counter += -1
    }
})
let lcd_counter = 0
let calculus = 0
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.clear()
basic.showIcon(IconNames.Heart)
I2C_LCD1602.ShowString("beep=press", 0, 0)
basic.pause(5000)
I2C_LCD1602.clear()
basic.forever(function () {
    calculus += randint(1, 10)
    I2C_LCD1602.ShowString("" + calculus + "      ", 9, 1)
    I2C_LCD1602.ShowNumber(lcd_counter, 0, 1)
    if (calculus == 5) {
        I2C_LCD1602.ShowString("press now", 0, 0)
        basic.pause(100)
        I2C_LCD1602.clear()
    }
    basic.pause(500)
    calculus = 0
})
