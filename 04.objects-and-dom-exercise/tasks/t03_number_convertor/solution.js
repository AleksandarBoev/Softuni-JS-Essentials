function solve() {
    const convertToSelectMenu = document.getElementById('selectMenuTo');
    const convertToOptions = convertToSelectMenu.options;

    const binaryOption = convertToSelectMenu.children[0];
    binaryOption.setAttribute('value', 'binary');
    binaryOption.textContent = 'Binary';

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.setAttribute('value', 'hexadecimal');
    hexadecimalOption.textContent = 'Hexadecimal';
    convertToSelectMenu.appendChild(hexadecimalOption);

    // console.log(convertToSelectMenu);
    const nameNumberRepresentationObj = {
        'binary': 2,
        'decimal': 10,
        'hexadecimal': 16
    };

    const convertFromSelectMenu = document.getElementById('selectMenuFrom');
    const convertFromOptions = convertFromSelectMenu.options;
    const convertButton = document.getElementsByTagName('button')[0];
    const resultInputElement = document.getElementById('result');

    convertButton.addEventListener('click', () => {
        const convertFrom = convertFromSelectMenu.textContent;
        const convertTo = convertToSelectMenu.textContent;

        var x = document.getElementById("mySelect").selectedIndex;
        var y = document.getElementById("mySelect").options;
        alert("Index: " + y[x].index + " is " + y[x].text);

        const result = nameNumberRepresentationObj[convertTo].toString();
        resultInputElement.value = result;
        resultInputElement.textContent = result;
        console.log(resultInputElement);
    });
}