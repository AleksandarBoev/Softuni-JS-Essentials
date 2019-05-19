/**
 * @param str {String}
 */
function wordsUppercase(str) {
    str = str.toUpperCase();

    let tokens = str.split(/\W+/);
    tokens = tokens.filter(t => t.trim() !== '');

    console.log(tokens.join(', '));
}

// wordsUppercase('Hi, how are you?');