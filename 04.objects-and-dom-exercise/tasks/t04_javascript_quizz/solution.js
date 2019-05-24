function solve() { //TODO task description does not specify how exactly to visualize result. Works properly as it is tho
    const addHidden = sectionElement => sectionElement.style.display = 'none';
    const removeHidden = sectionElement => sectionElement.style.display = 'block';
    const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswersCounter = 0;

    const resultHeader = document.createElement('h1');
    const quizDivElement = document.getElementById('quizzie').appendChild(document.createElement('h1'));
    // const visualizeResult = string => {
    //     const resultLiElement = document.getElementsByClassName('results-inner')[0];
    //     const resultHeader = resultLiElement.children[0];
    //     resultHeader.textContent = string;
    //     resultLiElement.style.display = 'block';
    // };

    const sections = document.getElementsByTagName('section');
    const answerDivBoxes = document.getElementsByClassName('answer-wrap');

    for (let i = 0; i < answerDivBoxes.length; i += 1) {
        answerDivBoxes[i].addEventListener('click', () => {
            const selectedAnswerParagraphElement = answerDivBoxes[i].children[0];
            const selectedAnswerValue = selectedAnswerParagraphElement.textContent;

            if (rightAnswers.includes(selectedAnswerValue)) { //if selected answer is right
                rightAnswersCounter++;
                if (rightAnswersCounter === sections.length) { //if all answers are correct
                    sections[rightAnswersCounter - 1].style.display = 'none';
                    resultHeader.textContent = 'You are recognized as top JavaScript fan!';
                    quizDivElement.appendChild(resultHeader);
                    // visualizeResult('You are recognized as top JavaScript fan!');
                } else {
                    addHidden(sections[rightAnswersCounter - 1]);
                    removeHidden(sections[rightAnswersCounter]);
                }
            } else { //if selected answer is wrong
                addHidden(sections[rightAnswersCounter]);
                resultHeader.textContent = `You have ${rightAnswersCounter} right answers`;
                quizDivElement.appendChild(resultHeader);
                // visualizeResult(`You have ${rightAnswersCounter} right answers`);
            }
        })
    }
}
