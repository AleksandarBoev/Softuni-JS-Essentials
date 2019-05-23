function solve() {
    const incrementViewsCount = (elementText) => {
        //looks like this: visited 6 times
        let num = Number.parseInt(elementText.split(' ')[1]);
        num += 1;
        return `visited ${num} times`;
    };

    const allDivs = document.getElementsByClassName('link-1');
    const allDivsArray = Array.of(allDivs)[0]; //this is needed for judge for some reason

    for (let i = 0; i < allDivsArray.length; i += 1) {
        const currentDivChildren = allDivsArray[i].children;

        //adding event listener to anchor. Each anchors event is tied to a specific paragraph.
        currentDivChildren[0].addEventListener('click', () => {
            const paragraphElement = currentDivChildren[1];
            const currentParagraphValue = paragraphElement.textContent;
            const newParagraphValue = incrementViewsCount(currentParagraphValue);
            paragraphElement.textContent = newParagraphValue;
        });
    }
}