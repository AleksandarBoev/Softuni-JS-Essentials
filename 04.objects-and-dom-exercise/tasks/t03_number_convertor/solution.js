function solve() {
    const convertFromSelectMenu = document.getElementById('selectMenuFrom');
    const convertFromOptions = convertFromSelectMenu.options;

    const convertToSelectMenu = document.getElementById('selectMenuTo');

    const binaryOption = convertToSelectMenu.children[0];
    binaryOption.setAttribute('value', 'binary');
    binaryOption.textContent = 'Binary';

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.setAttribute('value', 'hexadecimal');
    hexadecimalOption.textContent = 'Hexadecimal';
    convertToSelectMenu.appendChild(hexadecimalOption);

    const convertToOptions = convertToSelectMenu.options;

    // console.log(convertToSelectMenu);
    const nameNumberRepresentationObj = {
        'binary': 2,
        'decimal': 10,
        'hexadecimal': 16
    };

    const convertButton = document.getElementsByTagName('button')[0];
    const resultInputElement = document.getElementById('result');
    const convertNumberInputElement = document.getElementById('input');

    convertButton.addEventListener('click', () => {
        const convertFromIndex = convertFromSelectMenu.selectedIndex;
        const selectedConvertFromValue = convertFromOptions[convertFromIndex].value;

        const convertToIndex = convertToSelectMenu.selectedIndex;
        const selectedConvertToValue = convertToOptions[convertToIndex].value;

        const numberToBeConverted = Number.parseInt(convertNumberInputElement.value);
        const result = numberToBeConverted.toString(nameNumberRepresentationObj[selectedConvertToValue]);
        resultInputElement.value = result.toUpperCase();
    });
}