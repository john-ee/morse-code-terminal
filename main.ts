radio.setGroup(1)
let MORSE_CODE = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
let MORSE_DECODE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let ALPHABET = 26
function letter_decoder(code: string): number {
    let indent = -1
    for (let i = 0; i < ALPHABET; i++) {
        if (code == MORSE_CODE[i]) {
            indent = i
        }
        
    }
    if (indent > -1) {
        basic.showString(MORSE_DECODE[indent])
        return 1
    } else {
        basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
            `)
        return 0
    }
    
}

let MAX = 25
let IDLE = 10
let code = ""
let word = [""]
word = []
let THRESHOLD = 150
let CYCLE = 300
let counter = 0
function on_forever2() {
    
    basic.pause(IDLE)
}

radio.onReceivedString(function on_received_code(receivedString: string) {
    letter_decoder(receivedString)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    
    code = ""
    for (let i = 0; i < word.length; i++) {
        // letter_decoder(word[i])
        radio.sendString(word[i])
    }
    word = []
    basic.clearScreen()
})
basic.forever(function on_forever() {
    let decoded: number;
    
    
    let counting = 0
    let spacestart = control.millis()
    while (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(IDLE)
        counting += 1
    }
    if (counting > 0 && counting < MAX) {
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
        decoded = letter_decoder(code)
        if (decoded == 1) {
            word.push(code)
        }
        
        // basic.show_number(len(word))
        basic.clearScreen()
        code = ""
    }
    
    basic.pause(10)
})
