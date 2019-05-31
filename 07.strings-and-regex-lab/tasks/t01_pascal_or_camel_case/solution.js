function solve() {
    const textInputElement = document.querySelector('form div #text'); //id is unique, but just practising query selector
    const namingConventionInputElement = document.querySelector('form div #naming-convention');
    const resultSpanElement = document.body.querySelector('div.result-container span#result');

    let text = textInputElement.value;
    const namingConvention = namingConventionInputElement.value;

    let words = text.split(' ').map(s => s[0].toUpperCase() + s.substring(1).toLowerCase());

    if (namingConvention === 'Camel Case') {
        words[0] = words[0].toLowerCase();
    } else if (namingConvention !== 'Pascal Case') {
        resultSpanElement.textContent = 'Error!';
        return;
    }

    resultSpanElement.textContent = words.reduce((accumulator, currentElement) => accumulator += currentElement);
}