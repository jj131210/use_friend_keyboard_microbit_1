input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
/**
 * 이 코드는 송신부 
 * 
 * 입니다
 */
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
