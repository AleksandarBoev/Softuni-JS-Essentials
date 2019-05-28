function solve() {
    const functionObject = (liElement) => {
        const savedLiElement = liElement;
        return {
            appendName: (name) => {
                if (savedLiElement.textContent === '') {
                    savedLiElement.textContent = name;
                } else {
                    savedLiElement.textContent += ', ' + name;
                }
            },
        }
    };

    const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const liElements = document.getElementsByTagName('li');

    const letterListItemObject = [];

    for (let i = 0; i < liElements.length; i += 1) {
        letterListItemObject[allLetters[i]] = functionObject(liElements[i]);
    }

    const inputFieldElement = document.getElementsByTagName('input')[0];
    const addButtonElement = document.getElementsByTagName('button')[0];
    console.log(addButtonElement);

    addButtonElement.addEventListener('click', () => {
            const nameToBeAdded = inputFieldElement.value;
            if (!nameToBeAdded)  //if it's an empty string, do nothing
                return;

            const firstLetter = '' + nameToBeAdded.charAt(0).toLowerCase();

            if (letterListItemObject[firstLetter] === undefined)
                return;

            letterListItemObject[firstLetter].appendName(nameToBeAdded);
        }
    )
}

