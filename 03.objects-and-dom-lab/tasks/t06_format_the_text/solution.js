function solve() {
    const paragraphSentence = document.querySelectorAll('body div#exercise p#input')[0]; //practising selectors
    const sentences = paragraphSentence.textContent.split(/ ?[\.!?] ?/);
    sentences.pop(); //last string is empty
    //TODO take all indices of ". ! ?" and substring to every third one

    const getArrayOfSentences = (arrayOfSentences, numberOfSentences) => {
        const result = [];
        let sentencesHolder = '';
        for (let i = 0; i < arrayOfSentences.length; i += 1) {
            if (i % numberOfSentences === 0) {
                result.push(sentencesHolder.trim());
                sentencesHolder = '';
            }

            sentencesHolder += arrayOfSentences[i].trim() + '. '; //what if the split happened from a '!' or '?'
        }
        if (sentencesHolder)
            result.push(sentencesHolder);

        return result;
    };

    const divOutputElement = document.getElementById('output');
    const paragraphTextContents = getArrayOfSentences(sentences, 3);
    for (currentParagraphContent of paragraphTextContents) {
        const currentParagraphElement = document.createElement('p');
        currentParagraphElement.textContent = currentParagraphContent;
        divOutputElement.appendChild(currentParagraphElement);
    }
}