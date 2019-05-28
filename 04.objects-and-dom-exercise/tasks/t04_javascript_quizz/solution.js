function solve() {
    const addHidden = sectionElement => sectionElement.style.display = 'none';
    const removeHidden = sectionElement => sectionElement.style.display = 'block';

    const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswersCounter = 0;

    const visualizeResult = quizResultMessage => {
        const resultUlElement = document.getElementById('results');
        const resultHeaderElement = resultUlElement.getElementsByTagName('h1')[0];
        resultUlElement.style.display = 'block';
        resultHeaderElement.textContent = quizResultMessage;
    };

    const sections = document.getElementsByTagName('section');

    for (let i = 0; i < sections.length; i += 1) {
        const answerDivBoxes = Array.from(sections[i].getElementsByClassName('answer-wrap'));

        for (let currentAnswerDivBox of answerDivBoxes) {
            currentAnswerDivBox.addEventListener('click', () => {
                addHidden(sections[i]);

                const answerValue = currentAnswerDivBox.getElementsByClassName('answer-text')[0].textContent;

                if (answerValue === rightAnswers[i]) {
                    rightAnswersCounter++;
                    if (rightAnswersCounter === sections.length)
                        visualizeResult('You are recognized as top JavaScript fan!');
                     else
                        removeHidden(sections[i + 1]);
                } else {
                    visualizeResult(`You have ${rightAnswersCounter} right answers`)
                }
            });
        }
    }
}
