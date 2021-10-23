let MORSE_CODE = {
    "A" : ".-",
    "B" : "-...",
    "C" : "-.-.",
    "D" : "-..",
    "E" : ".",
    "F" : "..-.",
    "G" : "--.",
    "H" : "....",
    "I" : "..",
    "J" : ".---",
    "K" : "-.-",
    "L" : ".-..",
    "M" : "--",
    "N" : "-.",
    "O" : "---",
    "P" : ".--.",
    "Q" : "--.-",
    "R" : ".-.",
    "S" : "...",
    "T" : "-",
    "U" : "..-",
    "V" : "...-",
    "W" : ".--",
    "X" : "-..-",
    "Y" : "-.--",
    "Z" : "--..",
}

let MAX = 15
basic.forever(function on_forever() {
    let counting = 0
    while (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(10)
        counting += 1
    }
    if (counting > 1 && counting < MAX) {
        led.plot(0, 0)
    } else if (counting >= MAX) {
        // .
        led.plot(0, 0)
        led.plot(1, 0)
    }
    
    // -
    // if input.button_is_pressed(Button.B):
    basic.pause(10)
})
