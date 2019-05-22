/*
['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'];

 */

function townsToJson(arrayOfStrings) {
    const getElementsAsArray = (str => str.split(/ ?\| ?/).filter(e => e !== ''));
    const elementIsANumber = (str => Number.parseFloat(str) == str); //Number.parseFloat produces NaN if parsing fails. NaN != string

    const columnNames = getElementsAsArray(arrayOfStrings[0]);

    const arrayOfTownObjects = [];
    for (let i = 1; i < arrayOfStrings.length; i += 1) {
        const townInfoArray = getElementsAsArray(arrayOfStrings[i]);
        const townObject = {};

        for (let j = 0; j < columnNames.length; j += 1) {
            if (!elementIsANumber(townInfoArray[j]))
                townObject[columnNames[j]] = townInfoArray[j];
            else
                townObject[columnNames[j]] = Number.parseFloat(townInfoArray[j]);
        }

        arrayOfTownObjects.push(townObject);
    }

    console.log(JSON.stringify(arrayOfTownObjects));
}

// townsToJson(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']);

