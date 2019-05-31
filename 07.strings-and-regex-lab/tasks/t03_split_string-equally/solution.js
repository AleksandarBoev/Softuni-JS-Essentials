function solve() {
    const stringInput = document.querySelector('#text').value;
    const number = Number.parseInt(document.querySelector('#number').value);
    let additionalCharsNeeded = number - (stringInput.length % number);
    if (additionalCharsNeeded === number)
        additionalCharsNeeded = 0;

    let realString = stringInput;
    realString += stringInput.substr(0, additionalCharsNeeded);

    const result = [];
    for (let i = 0; i < realString.length; i += number) {
        result.push(realString.substr(i, number));
    }

    const resultSpan = document.querySelector('#result');
    resultSpan.textContent = result.join(' ');
}
