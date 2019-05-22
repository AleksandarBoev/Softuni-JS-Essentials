function countWordsInAText(arrayWithOneString) {
    const words = arrayWithOneString[0].split(/[^A-z0-9_]+/).filter(e => e); // '' is falsy

    const wordsObject = {};

    for (let currentWord of words) {
        if (!wordsObject[currentWord])
            wordsObject[currentWord] = 0;

        wordsObject[currentWord] += 1;
    }

    console.log(JSON.stringify(wordsObject));
}

// countWordsInAText(['Far too slow, you\'re far too slow.']);