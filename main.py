radio.set_group(1)

MORSE_CODE = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
]
MORSE_DECODE = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]
ALPHABET = 26

def on_gesture_shake():
    global code
    global word
    code = ""
    for i in range(len(word)):
        #letter_decoder(word[i])
        radio.send_string(word[i])
    word = []
    basic.clear_screen()

def on_received_code(receivedString):
    letter_decoder(receivedString)
    basic.clear_screen()


def letter_decoder(code):
    indent = -1
    for i in range(0,ALPHABET):
        if code == MORSE_CODE[i]:
            indent = i
    if indent > -1:
        basic.show_string(MORSE_DECODE[indent])
        return 1
    else:
        basic.show_leds("""
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
            """)
        return 0

MAX = 25
IDLE = 10
code = ""
word = [""]
word = []
def on_forever():
    global code
    global word
    counting = 0
    spacestart = control.millis()
    while input.button_is_pressed(Button.A):
        basic.clear_screen()
        basic.pause(IDLE)
        counting+=1
    if counting > 0 and counting < MAX:
        led.plot(0, 0)#.
        code = "" + code + "."
    elif counting >= MAX:
        led.plot(0, 0)
        led.plot(1, 0)#-
        code = "" + code + "-"   
    if input.button_is_pressed(Button.B):
        decoded = letter_decoder(code)
        if decoded == 1:
            word.append(code)
        #basic.show_number(len(word))
        basic.clear_screen()
        code = ""
    basic.pause(10)


THRESHOLD = 150
CYCLE = 300
counter = 0
def on_forever2():
    global counter
    basic.pause(IDLE)

radio.on_received_string(on_received_code)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
basic.forever(on_forever)