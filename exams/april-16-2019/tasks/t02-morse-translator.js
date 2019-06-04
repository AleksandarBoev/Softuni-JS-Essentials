function morseTranslator(strInput) {
    const morseCodeLetter = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
    };

    console.log(strInput
        .split(' ')
        .map(morseCode => morseCodeLetter[morseCode])
        .reduce((acc, curr) => acc + curr, ''))
}

// morseTranslator('... - .- -.-. -.- --- ...- . .-. ..-. .-.. --- .--');