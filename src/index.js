const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let translated = [];
    let str = '';
    let words = expr.split('**********');
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j += 2) {
            let chr = '';
            let chr2 = words[i][j] + words[i][j + 1];
            if(chr2 == '10') chr = '.';
            if(chr2 == '11') chr = '-';
            if(chr2 == '00') chr = ' ';
            translated.push(chr);
        }
        if(i != words.length - 1) translated.push('_'); 
    }
    
    for(let i = 0; i < translated.length; i += 5) {
        if(translated[i] == '_') {
            str = str + ' '; 
            i++;
        } 
        let decodedWord = translated.slice(i, i + 5).join('').trim();
        str = str + MORSE_TABLE[decodedWord];
    }
    return str;
}

module.exports = {
    decode
}