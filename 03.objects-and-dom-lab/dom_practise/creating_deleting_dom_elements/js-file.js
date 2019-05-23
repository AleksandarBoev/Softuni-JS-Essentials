const addParagraph = () => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'This has been created!';
    document.body.appendChild(paragraphElement); //creates child at the end of the dom element (body)
};

const addClassColor = () => {
    const paragraphElements = document.querySelectorAll('p');

    for (let currentParagraph of paragraphElements) {
        console.log(currentParagraph);
        currentParagraph.setAttribute('class', 'par-color');
        console.log(currentParagraph);
    }
};

const addClassFontSize = () => {
    const paragraphElements = document.querySelectorAll('p');

    for (let currentParagraph of paragraphElements) {
        currentParagraph.setAttribute('class', 'par-text-size');
    }
};

const deleteLastParagraph = () => {
    const allParagraphs = document.querySelectorAll('p');
    document.body.removeChild(allParagraphs[allParagraphs.length - 1]);
};

const createParagraphFromInput = () => {
    const userNameFieldElement = document.getElementById('user-name');
    const userName = userNameFieldElement.value;

    const userAgeFieldElement = document.getElementById('user-age');
    const userAge = Number.parseInt(userAgeFieldElement.value); //altho the input type = 'number', here it is received as a string

    const newListItemElement = document.createElement('li');
    newListItemElement.textContent = `Hello, ${userName}, you are ${userAge} years old!`;
    document.getElementById('all-users').appendChild(newListItemElement);
};

