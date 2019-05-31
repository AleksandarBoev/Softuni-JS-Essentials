function solve() {
    const inputTokens = document.querySelector('#text').value.split(' ').filter(t => t !== '');

    let numbers = [];
    let words = [];

    for (const token of inputTokens) {
        let number = Number(token);

        isNaN(number) ? words.push(token) : numbers.push(number);
    }

    const wordsToCharCodes = words.map(word => {
        const charCodes = [];

        for (let i = 0; i < word.length; i += 1)
            charCodes.push(word.charCodeAt(i));

        return charCodes.join(' ');
    });


    const charCodesToWord = numbers
        .map(num => String.fromCharCode(num))
        .reduce((accumulator, currentElement) => accumulator += currentElement);

    const resultParagraphs = [];

    wordsToCharCodes.forEach(c => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = c;
        resultParagraphs.push(newParagraph);
    });

    const lastParagraph = document.createElement('p');
    lastParagraph.textContent = charCodesToWord;
    resultParagraphs.push(lastParagraph);

    const resultSpanElement = document.querySelector('#result');
    resultParagraphs.forEach(p => resultSpanElement.appendChild(p));
}
