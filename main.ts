let MORSE_CODE = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
let MORSE_DECODE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let MAX = 30
let ALPHABET = 26
let code = ""
basic.forever(function on_forever() {
    let indent: number;
    let counting = 0
    
    while (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(10)
        counting += 1
    }
    if (counting > 1 && counting < MAX) {
        led.plot(0, 0)
        // .
        code = "" + code + "."
    } else if (counting >= MAX) {
        led.plot(0, 0)
        led.plot(1, 0)
        // -
        code = "" + code + "-"
    }
    
    if (input.buttonIsPressed(Button.B)) {
        indent = -1
        for (let i = 0; i < ALPHABET; i++) {
            if (code == MORSE_CODE[i]) {
                indent = i
            }
            
        }
        if (indent > -1) {
            basic.showString(MORSE_DECODE[indent])
        } else {
            basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                `)
        }
        
        basic.clearScreen()
        code = ""
    }
    
    basic.pause(10)
})
