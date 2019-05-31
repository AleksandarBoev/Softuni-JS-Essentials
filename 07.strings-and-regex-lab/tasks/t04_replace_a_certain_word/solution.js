function solve() {
    const replacement = document.querySelector('#word').value;
    const text = document.querySelector('#text').value;

    const arrayOfStrings = JSON.parse(text);
    const stringToBeReplaced = arrayOfStrings[0].split(' ')[2];
    const regex = new RegExp(stringToBeReplaced, 'ig'); //i - case insensitive, g - all matches

    const resultSpan = document.querySelector('#result');

    for (let str of arrayOfStrings) {
        str = str.replace(regex, replacement);

        const newParagraph = document.createElement('p');
        newParagraph.textContent = str;
        resultSpan.appendChild(newParagraph);
    }
}
