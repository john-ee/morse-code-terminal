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

MAX = 30
ALPHABET = 26
code = ""
def on_forever():
    counting = 0
    global code
    while input.button_is_pressed(Button.A):
        basic.clear_screen()
        basic.pause(10)
        counting+=1
    if counting > 1 and counting < MAX:
        led.plot(0, 0)#.
        code = "" + code + "."
    elif counting >= MAX:
        led.plot(0, 0)
        led.plot(1, 0)#-
        code = "" + code + "-"
    if input.button_is_pressed(Button.B):
        indent = -1
        for i in range(ALPHABET):
            if code == MORSE_CODE[i]:
                indent = i
        if indent > -1:
            basic.show_string(MORSE_DECODE[indent])
        else:
            basic.show_leds("""
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                """)
        basic.clear_screen()
        code = ""
    basic.pause(10)
basic.forever(on_forever)

